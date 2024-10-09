/*
 *
 *
脚本功能：Vip+会员画质+去广告,页面优化
软件版本：++
下载地址：苹果商店下载
脚本作者:
更新时间：2024年7月18日 10:44
电报频道：https://t.me/GieGie777
问题反馈：
使用声明：⚠️此脚本仅供学习与交流，请在下载使用24小时内删除！请勿在中国大陆转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]

# > 芒果TV,Vip+会员画质+去广告,页面优化
^https?:\/\/.*mgtv.com.*(GetUserInfo|module\/list\?_support|app\/bdboot|pullReleaseInfo|floor\/detail|video\/source|entry\?_support).*$ url script-response-body https://raw.githubusercontent.com/kkdnl007/Scripts/master/mgtv.js
^https?:\/\/mobile-stream\.api\.mgtv\.com\/v1\/video\/source\? url script-request-header https://raw.githubusercontent.com/kkdnl007/Scripts/master/mgtk.js
^https?://mobile.da.mgtv.com\/m\/page url reject

[mitm] 
hostname = *mgtv.com
*
*


*
*
*/
