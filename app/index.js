var https = require('https');

var jsonObject = JSON.stringify ({"Customer":{"id":"69222145","foreName":"naveen","surName":"srivastava","Address":{"line1":"2,ABBOTT CLOSE","line2":"HAMPTON","line3":null,"line4":null,"line5":null,"postCode":"TW12 3XR","country":"Z0"},"EmailAddress":"NAVEEN.SRIVASTAVA@THETRAINLINE.COM","Token":{"Token":"4761920749597344522-14092017151629","TokenExpiryTime":"2017-09-14T15:16:29Z"}},"DeliveryOption":{"DeliveryOptionType":"ETicket"},"JourneyRequest":{"Origin":"EUS","Destination":"MAN","NumberOfAdults":1,"NumberOfChildren":0,"Railcards":[],"OutboundDate":"2017-09-30","OutboundTime":"15-00","IsReturn":false,"ReturnDate":null,"ReturnTime":null,"PromotionCode":"","PromotionPin":""},"SelectedOutboundJourney":{"JourneyInDoubt":false,"OriginName":"London Euston","DestinationName":"Manchester Piccadilly","JourneyId":3,"DepartureDateTime":"2017-09-30T15:00:00+01:00","ArrivalDateTime":"2017-09-30T17:04:00+01:00","DepartureTime":"15:00","ArrivalTime":"17:04","Duration":"2h 4m","Date":"30 Sep, Saturday","KioskPrinterAvailable":true,"IsReservable":true,"Legs":[{"OperatorCompany":"Virgin Trains","Mode":"Train","FromName":"London Euston","ToName":"Manchester Piccadilly","Duration":"2hr 4mins","DestinationArrivalTime":"17:04","OriginDepartureTime":"15:00","TrainId":"P51679","Seats":null,"ServiceProviderName":null}],"Tickets":[{"Id":48,"FareClass":"S","IsStandardTicket":true,"Name":"Advance Single","TicketType":"VES","RouteCode":"00474","FareOriginNlc":null,"FareDestinationNlc":null,"Journey":null,"Origin":"1444","Destination":"2968","XLond":false,"Promo":"","Total":2300,"Fare":23,"NonPromoFare":23,"Type":null,"FareSrc":"O","RteRest":"00474","RteRestDesc":"Only valid on booked Virgin Trains services.","SeatAvCode":null,"Adults":{"Fare":23,"NonPromoFare":23,"Number":1},"Children":{"Fare":0,"NonPromoFare":0,"Number":0},"Description":"Specified train only. No refunds.","TicketCost":0,"Railcards":[],"NameFareRteRest":"ADVANCE_SINGLE_2300_00474","DeliveryOptions":["Collect at station","ETicket"],"ReservationRequired":true,"SeatsLeft":9},{"Id":24,"FareClass":"F","IsStandardTicket":false,"Name":"Advance Single (1St Class)","TicketType":"FCS","RouteCode":"00474","FareOriginNlc":null,"FareDestinationNlc":null,"Journey":null,"Origin":"1444","Destination":"2968","XLond":false,"Promo":"","Total":5600,"Fare":56,"NonPromoFare":56,"Type":null,"FareSrc":"O","RteRest":"00474","RteRestDesc":"Only valid on booked Virgin Trains services.","SeatAvCode":null,"Adults":{"Fare":56,"NonPromoFare":56,"Number":1},"Children":{"Fare":0,"NonPromoFare":0,"Number":0},"Description":"Specified train only. No refunds.","TicketCost":0,"Railcards":[],"NameFareRteRest":"ADVANCE_SINGLE_(1ST_CLASS)_5600_00474","DeliveryOptions":["Collect at station","ETicket"],"ReservationRequired":true,"SeatsLeft":9},{"Id":7,"FareClass":"S","IsStandardTicket":true,"Name":"Off-Peak Single","TicketType":"SVS","RouteCode":"00000","FareOriginNlc":null,"FareDestinationNlc":null,"Journey":null,"Origin":"1072","Destination":"0438","XLond":false,"Promo":"","Total":8290,"Fare":82.9,"NonPromoFare":82.9,"Type":null,"FareSrc":"O","RteRest":"00000","RteRestDesc":"Travel is allowed via any permitted route.","SeatAvCode":null,"Adults":{"Fare":82.9,"NonPromoFare":82.9,"Number":1},"Children":{"Fare":0,"NonPromoFare":0,"Number":0},"Description":"Any off-peak train.","TicketCost":0,"Railcards":[],"NameFareRteRest":"OFF-PEAK_SINGLE_8290_00000","DeliveryOptions":["Collect at station","Mobile"],"ReservationRequired":false,"SeatsLeft":9},{"Id":2,"FareClass":"F","IsStandardTicket":false,"Name":"Off-Peak Single (1St Class)","TicketType":"FSS","RouteCode":"00000","FareOriginNlc":null,"FareDestinationNlc":null,"Journey":null,"Origin":"1072","Destination":"0438","XLond":false,"Promo":"","Total":14000,"Fare":140,"NonPromoFare":140,"Type":null,"FareSrc":"O","RteRest":"00000","RteRestDesc":"Travel is allowed via any permitted route.","SeatAvCode":null,"Adults":{"Fare":140,"NonPromoFare":140,"Number":1},"Children":{"Fare":0,"NonPromoFare":0,"Number":0},"Description":"Any off-peak train.","TicketCost":0,"Railcards":[],"NameFareRteRest":"OFF-PEAK_SINGLE_(1ST_CLASS)_14000_00000","DeliveryOptions":["Collect at station","Mobile"],"ReservationRequired":false,"SeatsLeft":9},{"Id":9,"FareClass":"S","IsStandardTicket":true,"Name":"Anytime Single","TicketType":"SOS","RouteCode":"00000","FareOriginNlc":null,"FareDestinationNlc":null,"Journey":null,"Origin":"1072","Destination":"0438","XLond":false,"Promo":"","Total":16900,"Fare":169,"NonPromoFare":169,"Type":null,"FareSrc":"O","RteRest":"00000","RteRestDesc":"Travel is allowed via any permitted route.","SeatAvCode":null,"Adults":{"Fare":169,"NonPromoFare":169,"Number":1},"Children":{"Fare":0,"NonPromoFare":0,"Number":0},"Description":"Travel any time of day.","TicketCost":0,"Railcards":[],"NameFareRteRest":"ANYTIME_SINGLE_16900_00000","DeliveryOptions":["Collect at station","Mobile"],"ReservationRequired":false,"SeatsLeft":9},{"Id":3,"FareClass":"F","IsStandardTicket":false,"Name":"Anytime Single (1St Class)","TicketType":"FOS","RouteCode":"00000","FareOriginNlc":null,"FareDestinationNlc":null,"Journey":null,"Origin":"1072","Destination":"0438","XLond":false,"Promo":"","Total":24200,"Fare":242,"NonPromoFare":242,"Type":null,"FareSrc":"O","RteRest":"00000","RteRestDesc":"Travel is allowed via any permitted route.","SeatAvCode":null,"Adults":{"Fare":242,"NonPromoFare":242,"Number":1},"Children":{"Fare":0,"NonPromoFare":0,"Number":0},"Description":"Travel any time of day.","TicketCost":0,"Railcards":[],"NameFareRteRest":"ANYTIME_SINGLE_(1ST_CLASS)_24200_00000","DeliveryOptions":["Collect at station","Mobile"],"ReservationRequired":false,"SeatsLeft":9}],"DeptDate":"2017-09-30","ChangeDetails":0,"IsJourneyCancelled":false,"RunningTimeInfo":{"DepartureInfo":null,"ArrivalInfo":null},"OriginPlatform":"1","Disruptions":null,"totalJourneyCost":23,"seatsLeft":9,"hasPromo":false,"isSelected":true},"SelectedOutboundTicket":{"RteRestrict":"00474","TotalFare":2300,"Type":"VES","FareSrc":"O"},"SelectedInboundJourney":null,"SelectedInboundTicket":null,"DeviceFingerPrintId":"f9cd8ff95b954e10973f0c33d745c2cb1505378789000","PaymentMethod":{"SavedCardDetails":{"CardAlias":"default","CV2":"111"}}});

var postheaders = {
    'Content-Type' : 'application/json',
    'Content-Length' : Buffer.byteLength(jsonObject, 'utf8'),
    'TocIdentifier': 'vtMobileWeb',
    'X-TTL-Customer-Authorization': '4761920749597344522-14092017151629'
};

var optionspost = {
    host : 'st1-fasttrackapi.ttlnonprod.com', // here only the domain name
    port : 443,
    headers: postheaders,
    path : '/v1/booking', // the rest of the url with parameters if needed
    method : 'POST' 
};



console.info('Options prepared:');
console.info(optionspost);
console.info('Do the Post call');

// do the POST call
var reqPost = https.request(optionspost, function(res) {
    console.log("statusCode: ", res.statusCode);
    // uncomment it for header details
//  console.log("headers: ", res.headers);

    res.on('data', function(d) {
        console.info('POST result:\n');
        process.stdout.write(d);
        console.info('\n\nPOST completed');
    });
});

// write the json data
reqPost.write(jsonObject);
reqPost.end();
reqPost.on('error', function(e) {
    console.error(e);
});


