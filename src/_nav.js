export default {
  items: [
    {
      title: true,
      name: 'Menu',
      icon: 'icon-folder',             
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}      // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '',            // optional class names space delimited list for title item ex: "text-center"
    },{
      name: 'Validate InpuT',
      url: '/nav/InpuT', 
    },{
      name: 'Validate InputRegistro',
      url: '/nav/InputRegistro', 
    },{
      name: 'Validate InputContato', 
      url: '/nav/InputContato'
    }

    // {
    //   name: 'Icons',
    //   url: '/icons',
    //   icon: 'icon-star',
    //   class:'title',
    //   children: [
    //     {
    //       name: 'Icones',
    //       url: '/icons/coreui-icons',
    //       icon: 'icon-star',
    //     },
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
