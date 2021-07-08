var tl = new TimelineMax({
    onupdate: updatePrecentage
});

var t2 = new TimelineMax();

const controller = new ScrollMagic.Controller();
tl.from("blockquote", .5, {x: 200, opacity: 0});
tl.from("span", 1, {width: 0}, "=-.5");
tl.from("#building", 1, {x: -200, opacity: 0}, "=-1");
tl.from("#programmer", 1, {x: 300, opacity: 0}, "=-.7");

t2.from("#box", 1, {opacity: 0, scale: 0});
t2.to("#box", .5, {left: "31%", scale: 1.3, borderColor: "#F1F1F1", borderWidth: 12, boxShadow: "1px 1px 0 0 rgba(0, 0, 0, .09", top: "20%"});

const scene = new ScrollMagic.Scene({
    triggerElement: ".sticky",
    triggerHook: "onLeave",
    duration: "100%"
})
    .setPin(".sticky")
    .setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
    triggerElement: "blockquote",
})
    .setTween(t2)
    .addTo(controller);

function updatePrecentage() {
    tl.progress();
    console.log( tl.progress())
}
