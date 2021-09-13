##UI code 
## Go to Angular\universal-app
Run `npm install`

Run `npm run build:ssr` && `npm run serve:ssr`

##Go to middle ware and run SpringJerseyApplication


##Go to gateway and run GatewayApplication. 
## In real work we can replace gateway with ApplicationLoadBalance (AWS)/ ApplicationGateway (Azure)/Clod load balancing (Google) 
##or use API management like Apigee, Amazon API gateway, Azure APIU management

## Now access the app localhost:<gatewayport>/Help

##The Help mudule in angular makes http call to middleware and prints the results in console

## The flow here is

##    http://locolhostlocalhost:<gatewayport>/Help   -> http://localhost:<express-engine port>
##	  http://locolhostlocalhost:<gatewayport>/api/*   -> http://localhost:<spring boot middleware port>/api/*

##---------------------
##  If we want to use nginx we can use that to proxy express engine 
## for this we need to modify C:\nginx-1.20.1\conf\nginx.conf
## Add "proxy_pass http://localhost:4000;" in "server.location"
## Now the flow will be
##    http://locolhostlocalhost:<gatewayport>/Help   -> http://localhost:<nginx port>  -> http://localhost:<express-engine port>
##	  http://locolhostlocalhost:<gatewayport>/api/*   -> http://localhost:<spring boot middleware port>/api/*
