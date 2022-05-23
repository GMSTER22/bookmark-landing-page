{
  let features = document.querySelectorAll( '.features' );

  features.forEach( feature => {

    let tabList = feature.querySelector( '[ role = "tablist" ]' );

    let panelList = feature.querySelector( '.feature__tabs' );

    // let panels = Array.from( feature.querySelectorAll( '[ role = "tabpanel" ]' ) );

    // let tabs = Array.from( tabList.querySelectorAll( '[ role = "tab" ]' ) );

    let activeTab = tabList.querySelector( '[ aria-selected = "true" ]' );

    let activePanel = panelList.querySelector( `#${activeTab.getAttribute( 'aria-controls' )}` );

    tabList.addEventListener( 'click', event => {

      let target = event.target;

      let targetRole = target.getAttribute( 'role' );

      if ( targetRole !== "tab" || target.getAttribute( 'aria-selected' ) === "true") return;

      activeTab = tabList.querySelector( '[ aria-selected = "true" ]' );

      activePanel = panelList.querySelector( `#${activeTab.getAttribute( 'aria-controls' )}` );
      
      activeTab.setAttribute( 'aria-selected', false );

      activePanel.setAttribute( 'hidden', true );

      target.setAttribute( 'aria-selected', true );

      panelList.querySelector(`#${ target.getAttribute( 'aria-controls' ) }`).hidden = false;
      
    } );


    tabList.addEventListener( 'keydown', event => {

      if ( event.key === "ArrowRight") {

        if ( ! event.target.nextElementSibling ) {

          event.target.parentElement.children[0].focus();

          event.target.parentElement.setAttribute( 'tabindex', 0 );

        }

        // activeTab.setAttribute( 'hidden', true );

        // activePanel = panelList.querySelector( `#${activeTab.getAttribute( 'aria-controls' ) }` );

        // event.target.nextElementSibling.setAttribute( 'hidden', false );

        // event.target.nextElementSibling.setAttribute( 'aria-selected', true );

        // panelList.querySelector( `#${ event.target.nextElementSibling.getAttribute( 'aria-controls' ) }` ).hidden = false;

        event.target.nextElementSibling.setAttribute( 'tabindex', 0 );

        event.target.nextElementSibling.focus();

      }

      if ( event.key === "ArrowLeft") {

        if ( ! event.target.previousElementSibling ) {

          event.target.parentElement.children[event.target.parentElement.children.length - 1].focus();

          event.target.parentElement.setAttribute( 'tabindex', 0 );

        }

        event.target.previousElementSibling.setAttribute( 'tabindex', 0 );

        event.target.previousElementSibling.focus();

        changeTabs( event );

      }

    } )

  } );

  

}