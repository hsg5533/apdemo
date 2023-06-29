window.onload = function () {
  let e = document.querySelector(".modal_close"),
    t = document.querySelectorAll(".common_btn > a"),
    l = document.querySelector(".system_modal"),
    c = document.querySelector(".modal_bg"),
    r = document.querySelector(".modal_card");
  if (t)
    for (let o = 0; o < t.length; o++)
      t[o].addEventListener("click", () => {
        l.style.display = "block";
      }),
        e.addEventListener("click", () => {
          r.style.display = "none";
        }),
        e.addEventListener("click", () => {
          c.style.display = "none";
        });
  let n = document.querySelector(".signature > div > a"),
    s = document.querySelector(".contract_md"),
    a = document.querySelector(".contract_btn > li:nth-child(2)"),
    i = document.querySelector(".contract_close");
  s &&
    (n.addEventListener("click", (e) => {
      e.preventDefault(),
        (s.style.display = "block"),
        (n.style.background = "#37689B"),
        (n.style.color = "#fff");
    }),
    a.addEventListener("click", (e) => {
      e.preventDefault(),
        (s.style.display = "none"),
        (n.style.background = "#EBF8F8"),
        (n.style.color = "#00A8B9");
    }),
    i.addEventListener("click", () => {
      (s.style.display = "none"),
        (n.style.background = "#EBF8F8"),
        (n.style.color = "#00A8B9");
    }));
  let d = document.querySelector(".connect_btn > button"),
    u = document.querySelector(".connect_regist"),
    y = document.querySelector(".connect_regist_card button");
  u &&
    (d.addEventListener("click", (e) => {
      e.preventDefault(), (u.style.display = "block");
    }),
    y.addEventListener("click", (e) => {
      e.preventDefault(), (u.style.display = "none");
    }));
  let v = document.querySelector(".qr_icon_btn"),
    b = document.querySelector(".qr_modal_box"),
    q = document.querySelector(".qr_modal");
  q &&
    (v.addEventListener("click", (e) => {
      e.preventDefault(), (q.style.display = "block");
    }),
    b.addEventListener("click", (e) => {
      e.preventDefault(), (q.style.display = "none");
    }));
  let f = document.querySelectorAll(".sub_order_tab > li > a");
  console.log(f);
  let k = document.querySelectorAll(".sub_tab_cont");
  console.log(k),
    f.forEach((e, t) => {
      e.addEventListener("click", function (e) {
        e.preventDefault(),
          k.forEach((e) => {
            e.classList.remove("tab_active");
          }),
          f.forEach((e) => {
            e.classList.remove("tab_active");
          }),
          f[t].classList.add("tab_active"),
          k[t].classList.add("tab_active");
      });
    });
  let S = document.querySelector("#tourism_ck"),
    p = document.querySelector(".tourism_bn_cont"),
    E = 0;
  S &&
    (S.onclick = function () {
      E
        ? ((p.style.display = "none"), E--)
        : ((p.style.display = "block"), E++);
    });
  let L = document.querySelectorAll(".user_pagination > li"),
    m = document.querySelectorAll(".user_guide_cont > li");
  L.forEach((e, t) => {
    e.addEventListener("click", function (e) {
      e.preventDefault(),
        m.forEach((e) => {
          e.classList.remove("user_active");
        }),
        L.forEach((e) => {
          e.classList.remove("user_active");
        }),
        L[t].classList.add("user_active"),
        m[t].classList.add("user_active");
    });
  });
  let g = document.querySelector(".user_guide_btn"),
    h = document.querySelector(".user_guide_cont"),
    D = document.querySelector(".user_guide"),
    A = 0;
  D &&
    (g.onclick = function () {
      A
        ? ((h.style.display = "none"), A--)
        : ((h.style.display = "block"), A++);
    });
};
