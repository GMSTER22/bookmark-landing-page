{
  let features = document.querySelectorAll( '.features' );

  features.forEach( feature => {

    let tabList = feature.querySelector( '[ role = "tablist" ]' );

    let panelList = feature.querySelector( '.feature__tabs' );

    let tabs = Array.from( tabList.querySelectorAll( '[ role = "tab" ]' ) );

    let activeTab = tabList.querySelector( '[ aria-selected = "true" ]' );

    let activePanel = panelList.querySelector( `#${activeTab.getAttribute( 'aria-controls' )}` );

    function deselectTab() {

      activeTab.setAttribute( 'aria-selected', false );

      activePanel.setAttribute( 'hidden', true );

    }

    function selectTab( target ) {

      target.setAttribute( 'aria-selected', true );

      panelList.querySelector( `#${ target.getAttribute( 'aria-controls' ) }` ).hidden = false;

    } 

    tabList.addEventListener( 'click', event => {

      let target = event.target;

      let targetRole = target.getAttribute( 'role' );

      if ( targetRole !== "tab" || target.getAttribute( 'aria-selected' ) === "true") return;

      activeTab = tabList.querySelector( '[ aria-selected = "true" ]' );

      activePanel = panelList.querySelector( `#${activeTab.getAttribute( 'aria-controls' )}` );

      deselectTab();

      selectTab( target );
      
    } );


    tabList.addEventListener( 'keydown', event => {

      if ( event.key === "ArrowRight") {

        activeTab = event.target;

        activePanel = panelList.querySelector( `#${activeTab.getAttribute( 'aria-controls' )}` );

        deselectTab();

        if ( ! event.target.nextElementSibling ) {

          event.target.parentElement.children[0].focus();

          selectTab( event.target.parentElement.children[0] );

        } else {

          event.target.nextElementSibling.focus();

          selectTab( event.target.nextElementSibling );

        }

      }

      if ( event.key === "ArrowLeft") {

        activeTab = event.target;

        activePanel = panelList.querySelector( `#${activeTab.getAttribute( 'aria-controls' )}` );

        deselectTab()

        if ( ! event.target.previousElementSibling ) {

          event.target.parentElement.children[ tabs.length - 1].focus();

          selectTab( event.target.parentElement.children[ tabs.length - 1 ] );

        } else {

          event.target.previousElementSibling.focus();

          selectTab( event.target.previousElementSibling );

        }

      }
      
    } );

  } );  

}