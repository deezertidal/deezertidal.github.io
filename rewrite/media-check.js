//浼樺寲鏌ヨ鍑嗙‘鐜?
//event-interaction https://raw.githubusercontent.com/deezertidal/QuantumultX-Rewrite/master/rewrite/media-check.js, tag = 娴佸獟浣? - 瑙ｉ攣鏌ヨ,img-url=checkmark.seal.system, enabled=true

const BASE_URL = 'https://www.netflix.com/title/';
const BASE_URL_YTB = "https://www.youtube.com/premium";
const BASE_URL_DISNEY = 'https://www.disneyplus.com';
const BASE_URL_Dazn = "https://startup.core.indazn.com/misl/v5/Startup";
const BASE_URL_Param = "https://www.paramountplus.com/"
const FILM_ID = 70143836
const BASE_URL_Discovery_token = "https://us1-prod-direct.discoveryplus.com/token?deviceId=d1a4a5d25212400d1e6985984604d740&realm=go&shortlived=true"
const BASE_URL_Discovery = "https://us1-prod-direct.discoveryplus.com/users/me"

const link = { "media-url": "https://raw.githubusercontent.com/KOP-XIAO/QuantumultX/master/img/southpark/7.png" } 
const policy_name = "Netflix" //濉叆浣犵殑 netflix 绛栫暐缁勫悕

const arrow = " 鉃? "

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'

// 鍗冲皢鐧婚檰
const STATUS_COMING = 2
// 鏀寔瑙ｉ攣
const STATUS_AVAILABLE = 1
// 涓嶆敮鎸佽В閿?
const STATUS_NOT_AVAILABLE = 0
// 妫?娴嬭秴鏃?
const STATUS_TIMEOUT = -1
// 妫?娴嬪紓甯?
const STATUS_ERROR = -2

var opts = {
  policy: $environment.params
};

var opts1 = {
  policy: $environment.params,
  redirection: false
};


var flags = new Map([[ "AC" , "馃嚘馃嚚" ] ,["AE","馃嚘馃嚜"], [ "AF" , "馃嚘馃嚝" ] , [ "AI" , "馃嚘馃嚠" ] , [ "AL" , "馃嚘馃嚤" ] , [ "AM" , "馃嚘馃嚥" ] , [ "AQ" , "馃嚘馃嚩" ] , [ "AR" , "馃嚘馃嚪" ] , [ "AS" , "馃嚘馃嚫" ] , [ "AT" , "馃嚘馃嚬" ] , [ "AU" , "馃嚘馃嚭" ] , [ "AW" , "馃嚘馃嚰" ] , [ "AX" , "馃嚘馃嚱" ] , [ "AZ" , "馃嚘馃嚳" ] , ["BA", "馃嚙馃嚘"], [ "BB" , "馃嚙馃嚙" ] , [ "BD" , "馃嚙馃嚛" ] , [ "BE" , "馃嚙馃嚜" ] , [ "BF" , "馃嚙馃嚝" ] , [ "BG" , "馃嚙馃嚞" ] , [ "BH" , "馃嚙馃嚟" ] , [ "BI" , "馃嚙馃嚠" ] , [ "BJ" , "馃嚙馃嚡" ] , [ "BM" , "馃嚙馃嚥" ] , [ "BN" , "馃嚙馃嚦" ] , [ "BO" , "馃嚙馃嚧" ] , [ "BR" , "馃嚙馃嚪" ] , [ "BS" , "馃嚙馃嚫" ] , [ "BT" , "馃嚙馃嚬" ] , [ "BV" , "馃嚙馃嚮" ] , [ "BW" , "馃嚙馃嚰" ] , [ "BY" , "馃嚙馃嚲" ] , [ "BZ" , "馃嚙馃嚳" ] , [ "CA" , "馃嚚馃嚘" ] , [ "CF" , "馃嚚馃嚝" ] , [ "CH" , "馃嚚馃嚟" ] , [ "CK" , "馃嚚馃嚢" ] , [ "CL" , "馃嚚馃嚤" ] , [ "CM" , "馃嚚馃嚥" ] , [ "CN" , "馃嚚馃嚦" ] , [ "CO" , "馃嚚馃嚧" ] , [ "CP" , "馃嚚馃嚨" ] , [ "CR" , "馃嚚馃嚪" ] , [ "CU" , "馃嚚馃嚭" ] , [ "CV" , "馃嚚馃嚮" ] , [ "CW" , "馃嚚馃嚰" ] , [ "CX" , "馃嚚馃嚱" ] , [ "CY" , "馃嚚馃嚲" ] , [ "CZ" , "馃嚚馃嚳" ] , [ "DE" , "馃嚛馃嚜" ] , [ "DG" , "馃嚛馃嚞" ] , [ "DJ" , "馃嚛馃嚡" ] , [ "DK" , "馃嚛馃嚢" ] , [ "DM" , "馃嚛馃嚥" ] , [ "DO" , "馃嚛馃嚧" ] , [ "DZ" , "馃嚛馃嚳" ] , [ "EA" , "馃嚜馃嚘" ] , [ "EC" , "馃嚜馃嚚" ] , [ "EE" , "馃嚜馃嚜" ] , [ "EG" , "馃嚜馃嚞" ] , [ "EH" , "馃嚜馃嚟" ] , [ "ER" , "馃嚜馃嚪" ] , [ "ES" , "馃嚜馃嚫" ] , [ "ET" , "馃嚜馃嚬" ] , [ "EU" , "馃嚜馃嚭" ] , [ "FI" , "馃嚝馃嚠" ] , [ "FJ" , "馃嚝馃嚡" ] , [ "FK" , "馃嚝馃嚢" ] , [ "FM" , "馃嚝馃嚥" ] , [ "FO" , "馃嚝" ] , [ "FR" , "馃嚝馃嚪" ] , [ "GA" , "馃嚞馃嚘" ] , [ "GB" , "馃嚞馃嚙" ] , [ "HK" , "馃嚟馃嚢" ] ,["HU","馃嚟馃嚭"], [ "ID" , "馃嚠馃嚛" ] , [ "IE" , "馃嚠馃嚜" ] , [ "IL" , "馃嚠馃嚤" ] , [ "IM" , "馃嚠馃嚥" ] , [ "IN" , "馃嚠馃嚦" ] , [ "IS" , "馃嚠馃嚫" ] , [ "IT" , "馃嚠馃嚬" ] , [ "JP" , "馃嚡馃嚨" ] , [ "KR" , "馃嚢馃嚪" ] , [ "LU" , "馃嚤馃嚭" ] , [ "MO" , "馃嚥馃嚧" ] , [ "MX" , "馃嚥馃嚱" ] , [ "MY" , "馃嚥馃嚲" ] , [ "NL" , "馃嚦馃嚤" ] , [ "PH" , "馃嚨馃嚟" ] , [ "RO" , "馃嚪馃嚧" ] , [ "RS" , "馃嚪馃嚫" ] , [ "RU" , "馃嚪馃嚭" ] , [ "RW" , "馃嚪馃嚰" ] , [ "SA" , "馃嚫馃嚘" ] , [ "SB" , "馃嚙" ] , [ "SC" , "馃嚫馃嚚" ] , [ "SD" , "馃嚫馃嚛" ] , [ "SE" , "馃嚫馃嚜" ] , [ "SG" , "馃嚫馃嚞" ] , [ "TH" , "馃嚬馃嚟" ] , [ "TN" , "馃嚬馃嚦" ] , [ "TO" , "馃嚬馃嚧" ] , [ "TR" , "馃嚬馃嚪" ] , [ "TV" , "馃嚬馃嚮" ] , [ "TW" , "馃嚚馃嚦" ] , [ "UK" , "馃嚞馃嚙" ] , [ "UM" , "馃嚭馃嚥" ] , [ "US" , "馃嚭馃嚫" ] , [ "UY" , "馃嚭馃嚲" ] , [ "UZ" , "馃嚭馃嚳" ] , [ "VA" , "馃嚮馃嚘" ] , [ "VE" , "馃嚮馃嚜" ] , [ "VG" , "馃嚮馃嚞" ] , [ "VI" , "馃嚮馃嚠" ] , [ "VN" , "馃嚮馃嚦" ] , [ "ZA" , "馃嚳馃嚘"]])

let result = {
  "title": '    馃摵  娴佸獟浣撴湇鍔℃煡璇?',
  "YouTube": '<b>YouTube: </b>妫?娴嬪け璐ワ紝璇烽噸璇? 鉂楋笍',
  "Netflix": '<b>Netflix: </b>妫?娴嬪け璐ワ紝璇烽噸璇? 鉂楋笍',
  "Dazn": "<b>Dazn: </b>妫?娴嬪け璐ワ紝璇烽噸璇? 鉂楋笍",
  "Disney": "<b>Disney釔?: </b>妫?娴嬪け璐ワ紝璇烽噸璇? 鉂楋笍",
  "Paramount" : "<b>Paramount釔?: </b>妫?娴嬪け璐ワ紝璇烽噸璇? 鉂楋笍",
  "Discovery" : "<b>Discovery釔?: </b>妫?娴嬪け璐ワ紝璇烽噸璇? 鉂楋笍",
  //"Google": "Google 瀹氫綅: 妫?娴嬪け璐ワ紝璇烽噸璇?"

}
const message = {
  action: "get_policy_state",
  content: $environment.params
};

;(async () => {
  testYTB()
  testDazn()
  testParam()
  let [{ region, status }] = await Promise.all([testDisneyPlus(),testNf(FILM_ID),testDiscovery()])
  console.log("NetFlix Result:"+result["Netflix"])
  console.log(`testDisneyPlus: region=${region}, status=${status}`)
  if (status==STATUS_COMING) {
    //console.log(1)
    result["Disney"] = "<b>Disney釔?:</b> 鍗冲皢鐧婚檰 鉃? "+'鉄?'+flags.get(region.toUpperCase())+"鉄? 鈿狅笍"
  } else if (status==STATUS_AVAILABLE){
    //console.log(2)
    result["Disney"] = "<b>Disney釔?:</b> 鏀寔 鉃? "+'鉄?'+flags.get(region.toUpperCase())+"鉄? 馃帀"
    console.log(result["Disney"])
  } else if (status==STATUS_NOT_AVAILABLE) {
    //console.log(3)
    result["Disney"] = "<b>Disney釔?:</b> 鏈敮鎸? 馃毇 "
  } else if (status==STATUS_TIMEOUT) {
    result["Disney"] = "<b>Disney釔?:</b> 妫?娴嬭秴鏃? 馃殾 "
  }

  let content = "------------------------------"+"</br>"+([result["YouTube"],result["Netflix"],result["Disney"],result["Dazn"],result["Paramount"],result["Discovery"]]).join("</br></br>")
  content = content + "</br>------------------------------</br>"+"<font color=#CD5C5C >"+"<b>鑺傜偣</b> 鉃? " + $environment.params+ "</font>"
  content =`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + content + `</p>`
//  cnt = `<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` +'----------------------</br></br>'+result["Disney"]+'</br></br>----------------------</br>'+$environment.params + `</p>`
$configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
      console.log(resolve.error);
      $done()
    }
    if (resolve.ret) {
      let output=JSON.stringify(resolve.ret[message.content])? JSON.stringify(resolve.ret[message.content]).replace(/\"|\[|\]/g,"").replace(/\,/g," 鉃? ") : $environment.params
      let content = "--------------------------------------</br>"+([result["Dazn"],result["Discovery"],result["Paramount"],result["Disney"],result["Netflix"],result["YouTube"]]).join("</br></br>")
      content = content + "</br>--------------------------------------</br>"+"<font color=#CD5C5C>"+"<b>鑺傜偣</b> 鉃? " + output+ "</font>"
      content =`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + content + `</p>`
      //$notify(typeof(output),output)
      console.log(output);
      $done({"title":result["title"],"htmlMessage":content})
      
    }
    //$done();|
  }, reject => {
    // Normally will never happen.
    $done();
  });  
  //$done({"title":result["title"],"htmlMessage":content})
})()
.finally(() => {
  
  $configuration.sendMessage(message).then(resolve => {
    if (resolve.error) {
      console.log(resolve.error);
      $done()
    }
    if (resolve.ret) {
      let output=JSON.stringify(resolve.ret[message.content])? JSON.stringify(resolve.ret[message.content]).replace(/\"|\[|\]/g,"").replace(/\,/g," 鉃? ") : $environment.params
      let content = "--------------------------------------</br>"+([result["Dazn"],result["Discovery"],result["Paramount"],result["Disney"],result["Netflix"],result["YouTube"]]).join("</br></br>")
      content = content + "</br>--------------------------------------</br>"+"<font color=#CD5C5C>"+"<b>鑺傜偣</b> 鉃? " + output+ "</font>"
      content =`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">` + content + `</p>`
      //$notify(typeof(output),output)
      console.log(output);
      $done({"title":result["title"],"htmlMessage":content})
      
    }
    //$done();|
  }, reject => {
    // Normally will never happen.
    $done();
  }); 
  
    $done({"title":result["title"],"htmlMessage":`<p style="text-align: center; font-family: -apple-system; font-size: large; font-weight: thin">`+'----------------------</br></br>'+"馃殽 妫?娴嬪紓甯?"+'</br></br>----------------------</br>'+ output + `</p>`})
}
  );


async function testDisneyPlus() {
  try {
    let { region, cnbl } = await Promise.race([testHomePage(), timeout(7000)])
    console.log(`homepage: region=${region}, cnbl=${cnbl}`)
    // 鍗冲皢鐧婚檰
//  if (cnbl == 2) {
//    return { region, status: STATUS_COMING }
//  }
    let { countryCode, inSupportedLocation, accessToken } = await Promise.race([getLocationInfo(), timeout(7000)])
    console.log(`getLocationInfo: countryCode=${countryCode}, inSupportedLocation=${inSupportedLocation}`)
    
    region = countryCode ?? region
    console.log( "region:"+region)
    // 鍗冲皢鐧婚檰
    if (inSupportedLocation === false || inSupportedLocation === 'false') {
      return { region, status: STATUS_COMING }
    } else {
      // 鏀寔瑙ｉ攣
      return { region, status: STATUS_AVAILABLE }
    }

   let support = await Promise.race([testPublicGraphqlAPI(accessToken), timeout(7000)])
      if (!support) {
      return { status: STATUS_NOT_AVAILABLE }
    }
    // 鏀寔瑙ｉ攣
    return { region, status: STATUS_AVAILABLE }
    
  } catch (error) {
    console.log("error:"+error)
    
    // 涓嶆敮鎸佽В閿?
    if (error === 'Not Available') {
      console.log("涓嶆敮鎸?")
      return { status: STATUS_NOT_AVAILABLE }
    }
    
    // 妫?娴嬭秴鏃?
    if (error === 'Timeout') {
      return { status: STATUS_TIMEOUT }
    }
    
    return { status: STATUS_ERROR }
  } 
  
}

function getLocationInfo() {
  return new Promise((resolve, reject) => {
    let opts0 = {
      url: 'https://disney.api.edge.bamgrid.com/graph/v1/device/graphql',
      method: "POST",
      opts: opts,
      headers: {
        'Accept-Language': 'en',
        "Authorization": 'ZGlzbmV5JmJyb3dzZXImMS4wLjA.Cu56AgSfBTDag5NiRA81oLHkDZfu5L3CKadnefEAY84',
        'Content-Type': 'application/json',
        'User-Agent': UA,
      },
      body: JSON.stringify({
        query: 'mutation registerDevice($input: RegisterDeviceInput!) { registerDevice(registerDevice: $input) { grant { grantType assertion } } }',
        variables: {
          input: {
            applicationRuntime: 'chrome',
            attributes: {
              browserName: 'chrome',
              browserVersion: '94.0.4606',
              manufacturer: 'apple',
              model: null,
              operatingSystem: 'macintosh',
              operatingSystemVersion: '10.15.7',
              osDeviceIds: [],
            },
            deviceFamily: 'browser',
            deviceLanguage: 'en',
            deviceProfile: 'macosx',
          },
        },
      }),
    }
    
    $task.fetch(opts0).then(response => {
      let data = response.body
      console.log("locationinfo:"+response.statusCode)
      if (response.statusCode !== 200) {
        console.log('getLocationInfo: ' + data)
        reject('Not Available')
        return
      } else {
        let {
          token: { accessToken },
          session: {
            inSupportedLocation,
            location: { countryCode },
      },
      } = JSON.parse(data)?.extensions?.sdk
        resolve({ inSupportedLocation, countryCode, accessToken })
      }
    }, reason => {
      reject('Error')
      return
    })
  })
}

function testHomePage() {
  return new Promise((resolve, reject) => {
    let opts0 = {
      url: 'https://www.disneyplus.com/',
      opts: opts,
      headers: {
        'Accept-Language': 'en',
        'User-Agent': UA,
      },
    }
    $task.fetch(opts0).then(response => {
      let data = response.body
      console.log("DisneyPlus: homepage"+response.statusCode)
      if (response.statusCode !== 200 || data.indexOf('not available in your region') !== -1) {
        reject('Not Available')
        return
      } else {
        let match = data.match(/Region: ([A-Za-z]{2})[\s\S]*?CNBL: ([12])/)
        if (!match) {
          resolve({ region: '', cnbl: '' })
          return
        } else {
          let region = match[1]
          let cnbl = match[2]
          //console.log("homepage"+region+cnbl)
          resolve({ region, cnbl })
        }
      }
    }, reason => {
      reject('Error')
      return
    })
  })
}

function testPublicGraphqlAPI(accessToken) {
  return new Promise((resolve, reject) => {
    let opts = {
      url: 'https://disney.api.edge.bamgrid.com/v1/public/graphql',
      headers: {
        'Accept-Language': 'en',
        Authorization: accessToken,
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
      },
      body: JSON.stringify({
        query:
          'query($preferredLanguages: [String!]!, $version: String) {globalization(version: $version) { uiLanguage(preferredLanguages: $preferredLanguages) }}',
        variables: { version: '1.5.0', preferredLanguages: ['en'] },
      }),
    }

    $task.fetch(opts).then( response => {

      resolve(response.status === 200)
    }, reason => {
        reject('Error')
        return
    })
  })
}

function timeout(delay = 5000) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('Timeout')
    }, delay)
  })
}


function testNf(filmId) {
  return new Promise((resolve, reject) =>{
    let option = {
      url: BASE_URL + filmId,
      opts: opts,
      timeout: 5200,
      headers: {
        'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36',
      },
    }
    $task.fetch(option).then(response => {
      //$notify("nf:"+response.statusCode)
      console.log("nf:"+response.statusCode)
      if (response.statusCode === 404) {
        
        result["Netflix"] = "<b>Netflix: </b>鏀寔鑷埗鍓ч泦 鈿狅笍"
        console.log("nf:"+result["Netflix"])
        resolve('Not Found')
        return 
      } else if (response.statusCode === 403) {
        
        //console.log("nfnf")
        result["Netflix"] = "<b>Netflix: </b>鏈敮鎸? 馃毇"
        console.log("nf:"+result["Netflix"])
        //$notify("nf:"+result["Netflix"])
        resolve('Not Available')
        return
      } else if (response.statusCode === 200) {
        let url = response.headers['X-Originating-URL']
        let region = url.split('/')[3]
        region = region.split('-')[0]
        if (region == 'title') {
          region = 'us'
        }
        console.log("nf:"+region)
        result["Netflix"] = "<b>Netflix: </b>瀹屾暣鏀寔"+arrow+ "鉄?"+flags.get(region.toUpperCase())+"鉄? 馃帀"
        //$notify("nf:"+result["Netflix"])
        resolve("nf:"+result["Netflix"])
        return 
      }
    }, reason => {
      result["Netflix"] = "<b>Netflix: </b>妫?娴嬭秴鏃? 馃殾"
      console.log(result["Netflix"])
      resolve("timeout")
    }
    )
  }
  )
}

function testYTB() { 
    let option = {
      url: BASE_URL_YTB,
      opts: opts,
      timeout: 2800,
      headers: {
        'User-Agent':
        'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'
      },
    }
    $task.fetch(option).then(response=> {
      let data = response.body
      console.log("ytb:"+response.statusCode)
      if (response.statusCode !== 200) {
        //reject('Error')
        result["YouTube"] = "<b>YouTube Premium: </b>妫?娴嬪け璐? 鉂楋笍"
      } else if (data.indexOf('Premium is not available in your country') !== -1) {
          //resolve('Not Available')
        result["YouTube"] = "<b>YouTube Premium: </b>鏈敮鎸? 馃毇"
      } else if (data.indexOf('Premium is not available in your country') == -1) {//console.log(data.split("countryCode")[1])
      let region = ''
      let re = new RegExp('"GL":"(.*?)"', 'gm')
      let ret = re.exec(data)
      if (ret != null && ret.length === 2) {
        region = ret[1]
      } else if (data.indexOf('www.google.cn') !== -1) {
        region = 'CN'
      } else {
        region = 'US'
      }
      //resolve(region)
      result["YouTube"] = "<b>YouTube Premium: </b>鏀寔 "+arrow+ "鉄?"+flags.get(region.toUpperCase())+"鉄? 馃帀"
      console.log("ytb:"+region+ result["YouTube"])
      }
    }, reason => {
      result["YouTube"] = "<b>YouTube Premium: </b>妫?娴嬭秴鏃? 馃殾"
      //resolve("timeout")
    })
}

function testDazn() { 
  
  const extra =`{
    "LandingPageKey":"generic",
    "Platform":"web",
    "PlatformAttributes":{},
    "Manufacturer":"",
    "PromoCode":"",
    "Version":"2"
  }`
  let option = {
    url: BASE_URL_Dazn,
    method: "POST",
    opts: opts,
    timeout: 2800,
    headers: {
      'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36',
      "Content-Type": "application/json"
    },
    body: extra
  }

  $task.fetch(option).then(response=> {
    let data = response.body
    //data = extra
    let header = JSON.stringify(response.headers)
    console.log("Dazn:"+response.statusCode)
    //console.log("Dazn:"+data)
    //$done(data)
    if (response.statusCode !== 200) {
      //reject('Error')
      result["Dazn"] = "<b>Dazn: </b>妫?娴嬪け璐? 鉂楋笍"
    } else if (response.statusCode == 200) {//console.log(data.split("countryCode")[1])
      //console.log(data)
      let region = ''
      let re = new RegExp('"GeolocatedCountry":"(.*?)"', 'gm')
      let ret = re.exec(data)
      if (ret != null && ret.length === 2) {
        region = ret[1]
        result["Dazn"] = "<b>Dazn: </b>鏀寔 "+arrow+ "鉄?"+flags.get(region.toUpperCase())+"鉄? 馃帀"
      } else {
        result["Dazn"] = "<b>Dazn: </b>鏈敮鎸? 馃毇"

      }
      //resolve(region)
            console.log("Dazn:"+region+ result["Dazn"])
    }
  }, reason => {
    result["Dazn"] = "<b>Dazn: </b>妫?娴嬭秴鏃? 馃殾"
    //resolve("timeout")
  })
}

function testParam() { 
  let option = {
    url: BASE_URL_Param,
    opts: opts1,
    timeout: 2800,
    headers: {
      'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.61 Safari/537.36'
    },
  }
  $task.fetch(option).then(response=> {
    //let data = response.body
    console.log("Paramount釔?:"+response.statusCode)
    if (response.statusCode == 200) {
      //reject('Error')
      result["Paramount"] = "<b>Paramount釔?: </b>鏀寔 馃帀 "
    } else if (response.statusCode == 302) {
      //resolve('Not Available')
      result["Paramount"] = "<b>Paramount釔?: </b>鏈敮鎸? 馃毇"
    } 
      console.log("Paramount釔?:"+ result["Paramount"])
  }, reason => {
    result["Paramount"] = "<b>Paramount釔?: </b>妫?娴嬭秴鏃? 馃殾"
    //resolve("timeout")
  })
}



function testDiscovery() {
  return new Promise((resolve, reject) =>{
    let option = {
      url: BASE_URL_Discovery_token,
      opts: opts1,
      timeout: 2800,
      headers: {
        'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36'
      },
      verify: false
    }
    $task.fetch(option).then(response=> {
      console.log("GetToken:"+response.statusCode)
      if(response.statusCode == 200) {
      let data = JSON.parse(response.body)
      console.log(data)
      let token = data["data"]["attributes"]["token"]
      const cookievalid =`_gcl_au=1.1.858579665.1632206782; _rdt_uuid=1632206782474.6a9ad4f2-8ef7-4a49-9d60-e071bce45e88; _scid=d154b864-8b7e-4f46-90e0-8b56cff67d05; _pin_unauth=dWlkPU1qWTRNR1ZoTlRBdE1tSXdNaTAwTW1Nd0xUbGxORFV0WWpZMU0yVXdPV1l6WldFeQ; _sctr=1|1632153600000; aam_fw=aam%3D9354365%3Baam%3D9040990; aam_uuid=24382050115125439381416006538140778858; st=${token}; gi_ls=0; _uetvid=a25161a01aa711ec92d47775379d5e4d; AMCV_BC501253513148ED0A490D45%40AdobeOrg=-1124106680%7CMCIDTS%7C18894%7CMCMID%7C24223296309793747161435877577673078228%7CMCAAMLH-1633011393%7C9%7CMCAAMB-1633011393%7CRKhpRz8krg2tLO6pguXWp5olkAcUniQYPHaMWWgdJ3xzPWQmdj0y%7CMCOPTOUT-1632413793s%7CNONE%7CvVersion%7C5.2.0; ass=19ef15da-95d6-4b1d-8fa2-e9e099c9cc38.1632408400.1632406594`
      let option1 = {
        url: BASE_URL_Discovery,
        opts: opts1,
        timeout: 2800,
        headers: {
          'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.87 Safari/537.36',
          "Cookie": cookievalid,
        },
        ciphers: "DEFAULT@SECLEVEL=1",
        verify: false
      }
      $task.fetch(option1).then(response=> {
        console.log("Discovery+ Check:"+response.statusCode)
        let data = JSON.parse(response.body)
        let locationd = data["data"]["attributes"]["currentLocationTerritory"]
        if (locationd == "us") {
          result["Discovery"] = "<b>Discovery釔?: </b>鏀寔 馃帀 "
          console.log("鏀寔Discovery釔?")
          resolve("鏀寔Discovery釔?")
          return
        } else {
          result["Discovery"] = "<b>Discovery釔?: </b>鏈敮鎸? 馃毇"
          console.log("涓嶆敮鎸丏iscovery釔?")
          resolve("涓嶆敮鎸丏iscovery釔?")
          return
        }
      }, reason => {
        console.log("Check-Error"+reason)
        resolve("discovery failed")
      })
    } else {
      console.log("GetToken-Error"+reason)
      resolve("discovery failed")
    }
    }, reason => {
      console.log("GetToken-Error"+reason)
      resolve("discovery failed")
    })})}
