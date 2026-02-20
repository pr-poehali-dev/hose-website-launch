import json
import os
import urllib.request
import urllib.parse


def handler(event, context):
    """Отправка заявки с сайта в Telegram"""
    if event.get('httpMethod') == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': ''
        }

    cors = {'Access-Control-Allow-Origin': '*'}

    if event.get('httpMethod') != 'POST':
        return {
            'statusCode': 405,
            'headers': cors,
            'body': json.dumps({'error': 'Method not allowed'})
        }

    try:
        body = json.loads(event.get('body', '{}'))
    except json.JSONDecodeError:
        return {
            'statusCode': 400,
            'headers': cors,
            'body': json.dumps({'error': 'Invalid JSON'})
        }

    name = body.get('name', '').strip()
    phone = body.get('phone', '').strip()
    email = body.get('email', '').strip()
    company = body.get('company', '').strip()
    message = body.get('message', '').strip()

    if not name or not phone:
        return {
            'statusCode': 400,
            'headers': cors,
            'body': json.dumps({'error': 'Имя и телефон обязательны'})
        }

    ip = event.get('requestContext', {}).get('identity', {}).get('sourceIp', 'unknown')

    text_lines = [
        '📋 *Новая заявка с сайта RUHOSE*',
        '',
        f'👤 *Имя:* {escape_md(name)}',
        f'📞 *Телефон:* {escape_md(phone)}',
    ]
    if email:
        text_lines.append(f'📧 *Email:* {escape_md(email)}')
    if company:
        text_lines.append(f'🏢 *Компания:* {escape_md(company)}')
    if message:
        text_lines.append(f'\n💬 *Сообщение:*\n{escape_md(message)}')
    text_lines.append(f'\n🌐 IP: {escape_md(ip)}')

    text = '\n'.join(text_lines)

    bot_token = os.environ.get('TELEGRAM_BOT_TOKEN', '')
    chat_id = os.environ.get('TELEGRAM_CHAT_ID', '')

    if not bot_token or not chat_id:
        return {
            'statusCode': 500,
            'headers': cors,
            'body': json.dumps({'error': 'Telegram не настроен'})
        }

    url = f'https://api.telegram.org/bot{bot_token}/sendMessage'
    payload = json.dumps({
        'chat_id': chat_id,
        'text': text,
        'parse_mode': 'Markdown'
    }).encode('utf-8')

    req = urllib.request.Request(url, data=payload, headers={'Content-Type': 'application/json'})
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            result = json.loads(resp.read().decode('utf-8'))
            if not result.get('ok'):
                return {
                    'statusCode': 500,
                    'headers': cors,
                    'body': json.dumps({'error': 'Ошибка отправки в Telegram'})
                }
    except Exception as e:
        return {
            'statusCode': 500,
            'headers': cors,
            'body': json.dumps({'error': f'Telegram API error: {str(e)}'})
        }

    return {
        'statusCode': 200,
        'headers': cors,
        'body': json.dumps({'success': True, 'message': 'Заявка отправлена'})
    }


def escape_md(text):
    for ch in ['_', '*', '[', ']', '(', ')', '~', '`', '>', '#', '+', '-', '=', '|', '{', '}', '.', '!']:
        text = text.replace(ch, '\\' + ch)
    return text
