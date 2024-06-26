
function vec3( x = 0, y = 0, z = 0 ) {
    return { x : x, y : y, z : z }
}

function addVec3( vec1 = { x : 0, y : 0, z : 0 }, vec2 = { x : 0, y : 0, z : 0 } ) {
    return {
        x : vec1.x + vec2.x,
        y : vec1.y + vec2.y,
        z : vec1.z + vec2.z,
    }
}

function scaleVec3 ( vec1 = { x : 0, y : 0, z : 0 }, f = 1 ) {
    return {
        x : vec1.x * f,
        y : vec1.y * f,
        z : vec1.z * f,
    }
}
function multVec3 ( vec1 = { x : 0, y : 0, z : 0 }, vec2 = { x : 0, y : 0, z : 0 } ) {
    return {
        x : vec1.x * vec2.x,
        y : vec1.y * vec2.y,
        z : vec1.z * vec2.z,
    }
}

function getVec3Magnitude( vec1 = { x : 0, y : 0, z : 0 } ) {
    return Math.sqrt( vec1.x ** 2 + vec1.y ** 2 + vec1.z ** 2 )
}

function fixRotationVector( vec = { x : 0, y : 0, z : 0 } ) {
    if ( vec.x > 360 ) { vec.x -= 360 }
    if ( vec.x < -360 ) { vec.x += 360 }

    if ( vec.y > 360 ) { vec.y -= 360 }
    if ( vec.y < -360 ) { vec.y += 360 }

    if ( vec.z > 360 ) { vec.z -= 360 }
    if ( vec.z < -360 ) { vec.z += 360 }
}

function getTransform( position = { x : 0, y : 0, z : 0 }, rotation = { x : 0, y : 0, z : 0 } ) { //translateZ( 600px )
	return `rotateX( ${ rotation.x }deg ) rotateY( ${ rotation.y }deg ) translate3d(${ position.x }px, ${ position.y }px, ${ position.z }px)`
}

function clamp( min, max, val ) {
	if ( min > val ) {
		return min
	} else if ( max < val ) {
		return max
	} else return val
}

function check1DCollition( start, end, current ) {
    return ( start <= current ) && ( end >= current )
}

function check3DCollition( p0, p1, current ) {
    return check1DCollition( p0.x, p1.x, current.x ) && 
        check1DCollition( p0.y, p1.y, current.y ) &&
        check1DCollition( p0.z, p1.z, current.z )
}


function coorTransform(x0, y0, z0, rxc, ryc, rzc){
    let x1 = x0;
    let y1 = y0 * Math.cos(rxc*deg) + z0 * Math.sin(rxc*deg);
    let z1 = -y0 * Math.sin(rxc*deg) + z0 * Math.cos(rxc*deg);
  
    let x2 = x1 * Math.cos(ryc*deg) - z1 * Math.sin(ryc*deg);
    let y2 = y1;
    let z2 = x1 * Math.sin(ryc*deg) + z1 * Math.cos(ryc*deg);
  
    let x3 = x2 * Math.cos(rzc*deg) + y2 * Math.sin(rzc*deg);
    let y3 = -x2 * Math.sin(rzc*deg) + y2 * Math.cos(rzc*deg);
    let z3 = z2;
    return [x3, y3, z3];
  }
  
  function coorReTransform(x3, y3, z3, rxc, ryc, rzc){
    let x2 = x3 * Math.cos(rzc*deg) - y3 * Math.sin(rzc*deg);
    let y2 = x3 * Math.sin(rzc*deg) + y3 * Math.cos(rzc*deg);
    let z2 = z3;
  
    let x1 = x2 * Math.cos(ryc*deg) + z2 * Math.sin(ryc*deg);
    let y1 = y2;
    let z1 = -x2 * Math.sin(ryc*deg) + z2 * Math.cos(ryc*deg);
  
    let x0 = x1;
    let y0 = y1 * Math.cos(rxc*deg) - z1 * Math.sin(rxc*deg);
    let z0 = y1 * Math.sin(rxc*deg) + z1 * Math.cos(rxc*deg);
  
    return [x0, y0, z0];
  }