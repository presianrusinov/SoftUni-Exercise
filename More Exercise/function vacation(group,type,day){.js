function vacation(group, type, day) {
    let totalPrice = 0

    if (type === 'Students') {

        switch (day) {
            case 'Friday': totalPrice += group * 8.45; break;
            case 'Saturday': totalPrice += group * 9.80; break;
            case 'Sunday': totalPrice += group * 10.46; break;

        }
        if (group >= 30) {
            totalPrice *= 0.85
        }
    }
    else if (type === 'Business') {
        if (group >= 100) {
            group -= 10
        }
        switch (day) {
            case 'Friday': totalPrice += group * 10.90; break;
            case 'Saturday': totalPrice += group * 15.60; break;
            case 'Sunday': totalPrice += group * 16;
                break;

        }
    }
    else if (type === 'Regular') {

        switch (day) {
            case 'Friday': totalPrice += group * 15; break;
            case 'Saturday': totalPrice += group * 20; break;
            case 'Sunday': totalPrice += group * 22.50;
                break;
        }
        if (group >= 10 && group <= 20) {
            totalPrice *= 0.95
        }
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}
vacation(20,
    'Regular',
    'Saturday')