describe('Car', () => {
    it ('starts off parked and with no miles', () => {
        const car = new Car('Nissan', 'Maxima');

        expect(car.state).toBe('PARKED');
        expect(car.mileage).toBe(0);
        expect(car.make).toBe('Nissan');
        expect(car.model).toBe('Maxima');
    })

    it ('drives the car a certain miles and changes the state', () => {
        const car = new Car('Nissan', 'Maxima');
        
        expect(car.mileage).toBe(0)
        car.drive(500)
        expect(car.mileage).toBe(500)
        expect(car.state).toBe('DRIVING')
    })

    it ('only when stopped turns to parked', () => {
        const car = new Car('Nissan', 'Maxima');
        
        expect(car.state).toBe('PARKED')
        car.drive(100)
        expect(car.state).toBe('DRIVING')
        car.park()
        expect(car.state).toBe('DRIVING')
        car.brake()
        expect(car.state).toBe('STOPPED')
        car.park()
        expect(car.state).toBe('PARKED')
    })

});


// it('should be able to play a Song', function() {
//     player.play(song);
//     expect(player.currentlyPlayingSong).toEqual(song);

//     // demonstrates use of custom matcher
//     expect(player).toBePlaying(song);
//   });

//   describe('when song has been paused', function() {
//     beforeEach(function() {
//       player.play(song);
//       player.pause();
//     });

//     it('should indicate that the song is currently paused', function() {
//       expect(player.isPlaying).toBeFalsy();

//       // demonstrates use of 'not' with a custom matcher
//       expect(player).not.toBePlaying(song);
//     });

//     it('should be possible to resume', function() {
//       player.resume();
//       expect(player.isPlaying).toBeTruthy();
//       expect(player.currentlyPlayingSong).toEqual(song);
//     });
//   });

//   // demonstrates use of spies to intercept and test method calls
//   it('tells the current song if the user has made it a favorite', function() {
//     spyOn(song, 'persistFavoriteStatus');

//     player.play(song);
//     player.makeFavorite();

//     expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
//   });

//   //demonstrates use of expected exceptions
//   describe('#resume', function() {
//     it('should throw an exception if song is already playing', function() {
//       player.play(song);

//       expect(function() {
//         player.resume();
//       }).toThrowError('song is already playing');
//     });
//   });

