### 统一资源定位符(url)

```js
  https://www.example.com:8080/books?id=1000#good

  // https  scheme
  // host   www.example.com
  // port   8080
  // path   /books
  // query  id=1000
  // fragment #good
```

### DNS(Domain Name Ststem)
用户访问 url -->> 浏览器访问 DNS 服务 ---->>返回 服务器ip地址 --->>>> 访问 目标服务器
-


### A记录
> IN 代表 internet

定义主机的ip地址  
www
### AAAA记录  代表ipv6的地址

### CNAME记录(Canonical Name Record)
定义域名的别名
访问 `www.example.com` 最终访问到 `example.com`  
www.example.com IN CNAME example.com  
a.example.com IN CNAME b.example.com  
www.foo.com IN CNAME foo.com  
### MX记录(Mail exchanger record) 邮件服务器

### SOA记录(start of Authority Record)
定义在多个NS服务器中哪个才是主服务器。用来解决服务器同步导致的数据不是最新的问题
ns3.dnsv5.com 是主服务器
IN SOA ns3.dnsv5.com.xxxxx