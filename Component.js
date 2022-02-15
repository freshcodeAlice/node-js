const {MyMath} = require('./MyMath');


class Component{
    render() {
        return 'Test Component'
    }
}

MyMath.sum(2,2);

exports.Component = Component;