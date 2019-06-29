class Trip {
    constructor(trip) {
        this.tripType = trip.tripType;
        this.sourceCity = trip.sourceCity;
        this.destCity = trip.destCity;
        this.dojStart = trip.dojStart;
        this.dojEnd = trip.dojEnd;
        this.busArrivalTime = trip.busArrivalTime;
        this.boardingPoint = trip.boardingPoint;
        this.viaRoutes = trip.viaRoutes;
        this.finalDest = trip.finalDest;
        this.vehicleDetails = trip.vehicleDetails;
        this.costDetails = trip.costDetails;
        return this;
    }
}
export {Trip};