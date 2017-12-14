# 【util_JS】QueryString  
URLパラメータを操作するJS  
-- URLパラメータ→オブジェクト生成  
-- 文字列→URLパラメータ生成  
  
## ex)  
・URLパラメータをオブジェクトに変換する  
QueryString.parse('hoge=100&foo=bar'); ⇒ {"hoge":"100", "foo":"bar"}  
・オブジェクトをURLパラメータに変換する  
stringify({"hoge":"100", "foo":"bar"}); ⇒ hoge=100&foo=bar  

