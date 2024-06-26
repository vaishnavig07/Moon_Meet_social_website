let swiper = new Swiper(".mySwiper",{
    slidesPerView:6,
    spaceBetween : 5,
});

// ........Windows Scroll popup ..........

window.addEventListener('scroll',()=>{
    document.querySelector('.profile-popup').style.display='none'
    document.querySelector('.add-post-popup').style.display='none'
    document.querySelector('.theme-customize').style.display='none'
    document.querySelector('.notification-box').style.display='none'
});

// ............Start aside.............

let menuItem = document.querySelectorAll('.menu-item');
// active remove
const removeActive = ()=>{
    menuItem.forEach(item=>{
        item.classList.remove('active');
    })
}
menuItem.forEach(item=>{
    item.addEventListener('click',()=>{
        removeActive();
        item.classList.add('active');
        document.querySelector('.notification-box').style.display='none'
    })
})

//    ...........notification............
document.querySelector('#Notify-box').addEventListener('click',()=>{
    document.querySelector('.notification-box').style.display='block'
    document.querySelector('#ntCounter1').style.display='none'
})

// ...............message..........................
document.querySelector('#messageMenu').addEventListener('click',()=>{
    document.querySelector('#notfyCounter2').style.display='none';
    document.querySelector('.messages').classList.toggle('boxshadow1')
    setTimeout(()=>{
        document.querySelector('.messages').classList.remove('boxshadow1')
    }, 3000);
})


// .........Start friend request............
let Accept = document.querySelectorAll('#Accept');
let Delete = document.querySelectorAll('#Delete');
let action = document.querySelectorAll('.action');
let request = document.querySelectorAll('.request');
Accept.forEach(accept=>{
    accept.addEventListener('click',()=>{
        accept.parentElement.style.display='none'
        accept.parentElement.parentElement.querySelector('.alert').style.display='block'
    })
});
Delete.forEach(deletee=>{
    deletee.addEventListener('click',()=>{
        deletee.parentElement.parentElement.querySelector('.alert').style.display='none'
    })
});


// ..................Start profile popup.........

document.querySelectorAll('#my-profile-picture').forEach(AllProfile => {
    AllProfile.addEventListener('click',()=>{
       document.querySelector('.profile-popup').style.display='flex' 
    })
});

document.querySelectorAll('.close').forEach(AllCloser => {
    AllCloser.addEventListener('click',()=>{
       document.querySelector('.profile-popup').style.display='none' 
       document.querySelector('.add-post-popup').style.display='none'
       document.querySelector('.theme-customize').style.display='none'
    })
});

document.querySelector('#profile-upload').addEventListener('change',()=>{
    document.querySelectorAll('#my-profile-picture img').forEach(AllMyProfileImg=>{
        AllMyProfileImg.src = URL.createObjectURL(document.querySelector('#profile-upload').files[0])
    })
});

// ..............Start Add post popup...................

document.querySelector('#create-lg').addEventListener('click',()=>{
    document.querySelector('.add-post-popup').style.display='flex'
});

document.querySelector('#feed-pic-upload').addEventListener('change',()=>{
    document.querySelector('#postIMG').src = URL.createObjectURL(document.querySelector('#feed-pic-upload').files[0]);
})

// ..............Start Add story...................

document.querySelector('#add-story').addEventListener('change',()=>{
document.querySelector('.story img').src = URL.createObjectURL(document.querySelector('#add-story').files[0]);
document.querySelector('.add-story').style.display='none'
});

// ................Mini button input..................
document.querySelector('.mini-button').addEventListener('click',()=>{
    document.querySelector('.input-post').classList.toggle('boxshadow1')
    setTimeout(()=>{
        document.querySelector('.input-post').classList.remove('boxshadow1')
    }, 3000);
    
});
document.querySelector('.mini-button').addEventListener('dblclick',()=>{
    document.querySelector('.add-post-popup').style.display='flex'
});

// ...........liked button..............
document.querySelectorAll('.action-button span:first-child i').forEach(liked=>{
    liked.addEventListener('click',()=>{
        liked.classList.toggle('liked');
    })
})

// ...............................Theme Customize.....................................

document.querySelector('#theme').addEventListener('click',()=>{
    document.querySelector('.theme-customize').style.display='flex'
});


// .......................font................................

let fontSize = document.querySelectorAll('.choose-size span')

const removeActiveSelector = ()=>{
    fontSize.forEach(Size=>{
        size.classList.remove('active')
    })
}

fontSize.forEach(size=>{
    
    size.addEventListener('click',()=>{
        let fontSize;
    removeActiveSelector();
    size.classList.toggle('active')

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
        }
        else if(size.classList.contains('font-size-2')){
            fontSize = '13px'
        }
        else if(size.classList.contains('font-size-3')){
            fontSize = '16px'
        }
        else if(size.classList.contains('font-size-4')){
            fontSize = '19px'
        }
        else if(size.classList.contains('font-size-5')){
            fontSize = '22px'
        }

         // html root fontsize change....
        document.querySelector('html').style.fontSize = fontSize;
    })

})

// ................primary color.................

let colorpallete = document.querySelectorAll('.choose-color span')
var root  = document.querySelector(':root')

const removeActiveColor = ()=>{
    colorpallete.forEach(color=>{
        color.classList.remove('active')
    })
}

colorpallete.forEach(color=>{
    color.addEventListener('click',()=>{
        let primaryHue;
        removeActiveColor();
        color.classList.add('active');
        if(color.classList.contains('color-1')){
            Hue = 252;
        }
        else if(color.classList.contains('color-2')){
            Hue = 52;
        }
        else if(color.classList.contains('color-3')){
            Hue = 352;
        }
        else if(color.classList.contains('color-4')){
            Hue = 152;
        }
        else if(color.classList.contains('color-5')){
            Hue = 202;
        }
        root.style.setProperty('--primary-color-hue',Hue)
    })
})


let bg1 = document.querySelector('.bg1')
let bg2 = document.querySelector('.bg2')

let lightColorLightTheme
let whiteColorLightTheme
let darkColorLightTheme
const changBg = ()=>{
    root.style.setProperty('--color-dark-light-theme',darkColorLightTheme)
    root.style.setProperty('--color-dark-light-theme',lightColorLightTheme)
    root.style.setProperty('--color-white-light-theme',whiteColorLightTheme)
}

bg2.addEventListener('click',()=>{
    lightColorLightTheme = '5%'
    whiteColorLightTheme = '10%'
    darkColorLightTheme = '95%'

    bg2.classList.add('active')
    bg1.classList.remove('active')
    
    bgicon()
    changBg();
})
bg1.addEventListener('click',()=>{
    
    bg1.classList.add('active')
    bg2.classList.remove('active')

   window.location.reload();
})

// dark theme

let menuItemImg = document.querySelectorAll('.menu-item span img');
const bgicon= ()=>{
    menuItemImg.forEach(icon=>{
        icon.classList.add('icon-bg')
    })
}








