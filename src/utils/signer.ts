import config from '../config/config';
const pmlib = require('../../ET_DEMO_NODE/back/utils/sign-util-lib');

export function createTimestamp(): string {
  return Math.round(new Date().getTime() / 1000) + '';
}

export function createNonceStr(): string {
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let str = '';
  for (let i = 0; i < 32; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
}

export function signString(text: string, privateKey: string): string {
  const sha256withrsa = new pmlib.rs.KJUR.crypto.Signature({
    alg: 'SHA256withRSAandMGF1',
  });
  sha256withrsa.init(privateKey);
  sha256withrsa.updateString(text);
  return pmlib.rs.hextob64(sha256withrsa.sign());
}

const excludeFields = ['sign', 'sign_type', 'header', 'refund_info', 'openType', 'raw_request', 'biz_content'];

export function signRequestObject(requestObject: Record<string, any>): string {
  const fieldMap: Record<string, any> = {};
  const fields: string[] = [];

  for (const key in requestObject) {
    if (excludeFields.includes(key)) continue;
    fields.push(key);
    fieldMap[key] = requestObject[key];
  }

  if (requestObject.biz_content) {
    for (const key in requestObject.biz_content) {
      if (excludeFields.includes(key)) continue;
      fields.push(key);
      fieldMap[key] = requestObject.biz_content[key];
    }
  }

  fields.sort();
  const signStr = fields.map(k => `${k}=${fieldMap[k]}`).join('&');
  return signString(signStr, config.privateKey);
}
