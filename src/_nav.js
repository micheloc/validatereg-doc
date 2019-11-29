export default {
  items: [
    {
      title: true,
      name: 'Trabalhando ainda',
      icon: 'icon-folder',             
      wrapper: {            // optional wrapper object
        element: '',        // required valid HTML5 element tag
        attributes: {}      // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
      },
      class: '',            // optional class names space delimited list for title item ex: "text-center"
    },
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
