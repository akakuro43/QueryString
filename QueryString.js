/*
 * URLパラメータを操作するクラス
 *  -- URLパラメータ→オブジェクト生成
 *  -- 文字列→URLパラメータ生成
 */

 //(ex
 // parse('hoge=100&foo=bar'); ⇒ {"hoge":"100", "foo":"bar"}
 // stringify({"hoge":"100", "foo":"bar"}); ⇒ hoge=100&foo=bar


export default class QueryString {
  constructor() {}
  static parse(text, sep, eq, isDecode) {
    text = text || location.search.substr(1);
    sep = sep || '&';
    eq = eq || '=';
    var decode = (isDecode) ? decodeURIComponent : function(a) { return a; };
    return text.split(sep).reduce(function(obj, v) {
      var pair = v.split(eq);
      obj[pair[0]] = decode(pair[1]);
      return obj;
    }, {});
  }

  static stringify(value, sep, eq, isEncode) {
    sep = sep || '&';
    eq = eq || '=';
    var encode = (isEncode) ? encodeURIComponent : function(a) { return a; };
    return Object.keys(value).map(function(key) {
      return key + eq + encode(value[key]);
    }).join(sep);
  }
}
