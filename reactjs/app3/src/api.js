function get() {
    return "http://www.theeasylearnacademy.com/shop/";
}

export default function getBase() {
    return get() + "ws/";
}

export function getImgBase() {
    return get() + "images/";
}