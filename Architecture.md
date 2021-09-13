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
