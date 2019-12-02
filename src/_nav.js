export default {
  items: [
    {
      title: true,
      name: 'Menu',
      icon: 'icon-list',             
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}      // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '',            // optional class names space delimited list for title item ex: "text-center"
    },{
      name: 'Validate InpuT',
      url: '/nav/InpuT', 
      icon: 'icon-text-width'
    },{
      name: 'Validate InputRegistro',
      url: '/nav/InputRegistro', 
      icon: 'icon-address-card-o'
    },{
      name: 'Validate InputContato', 
      url: '/nav/InputContato',
      icon: 'icon-phone' 
    }, 

    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   class:'title',
    //   children: [
    //     {
    //       name: 'Font Awesome',
    //       url: '/icons/font-awesome',
    //       icon: 'icon-star',
    //       badge: {
    //         variant: 'secondary',
    //         text: '4.7',
    //       },
    //     },
    //     {
    //       name: 'Simple Line Icons',
    //       url: '/icons/simple-line-icons',
    //       icon: 'icon-star',
    //     },
    //   ],
    // },
  ],

};
