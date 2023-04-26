var modifiedHeaders = $request.headers;
modifiedHeaders['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 16_3 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) EdgiOS/110.0.1587.54 Version/16.0 Mobile/15E148 Safari/604.1';

$done({headers : modifiedHeaders});