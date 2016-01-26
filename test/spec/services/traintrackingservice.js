'use strict';

describe('Service: trainTrackingService', function () {

  // load the service's module
  beforeEach(module('trafficApp'));

  // instantiate service
  var trainTrackingService;
  beforeEach(inject(function (_trainTrackingService_) {
    trainTrackingService = _trainTrackingService_;
  }));

  it('should do something', function () {
    expect(!!trainTrackingService).toBe(true);
  });

});
