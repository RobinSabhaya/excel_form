const str = `/*O_o*/ google.visualization.Query.setResponse({"version":"0.6","reqId":"0","status":"ok","sig":"1864369130","table":{"cols":[{"id":"A","label":"","type":"string"},{"id":"B","label":"","type":"string"},{"id":"C","label":"","type":"string"},{"id":"D","label":"","type":"string"},{"id":"E","label":"","type":"string"}],"rows":[{"c":[{"v":"b5dca613-500d-44f5-a360-a286909e8dc4"},{"v":"robin"},{"v":"sabhaya"},{"v":"robin@gmail.com"},{"v":"male"}]}],"parsedNumHeaders":0}})`;
console.log(JSON.parse(str.slice(47, str.length - 1)));
