var t1 = gsap.timeline()
t1.from(".navbar > ul > li",{
    y: 15,
    duration: .4,
    opacity: 0,
    stagger: 0.2
})
t1.from(".navbar > button", {
    y: 15,
    duration: .3,
    opacity: 0,
    stagger: 0.1
})

var t2 = gsap.timeline()
t2.from(".front > *", {
    y: 50,
    duration: 0.4,
    opacity: 0,
    stagger: 0.1
})
// t2.from(".container", {
//     y: 50,
//     duration: 0.4,
//     opacity: 0,
//     stagger: 0.2
// })