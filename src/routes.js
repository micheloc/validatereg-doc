import React from 'react';

const PagePrincipal = React.lazy(() => import('./components/home/home'));
const FrmNavGaleria = React.lazy(() => import('./components/galeria/NavIndex')); 
const FrmNavCliente = React.lazy(() => import('./components/inputValidate/FrmCadastroCliente')); 


const FontAwesome = React.lazy(() => import('./views/Icons/FontAwesome'));
const SimpleLineIcons = React.lazy(() => import('./views/Icons/SimpleLineIcons'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Pagina Inicial', component: PagePrincipal },
  { path: '/nav/galeria', name: 'Galeria', component: FrmNavGaleria },
  { path: '/nav/cliente', name: 'Cliente', component: FrmNavCliente},


  { path: '/icons/font-awesome', name: 'Font Awesome', component: FontAwesome },
  { path: '/icons/simple-line-icons', name: 'Simple Line Icons', component: SimpleLineIcons },
];

export default routes;
