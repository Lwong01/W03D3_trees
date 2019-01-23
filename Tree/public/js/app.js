$(() => {

  function createCreakElement1(creak) {
    return `
    <article class="creak">
      <header>
        <h3>${creak.username}</h3>
      </header>
      <main>
        <p>${creak.content}</p>
      </main>
    </article>
    `;
  }

  function createCreakElement2(creak) {
    const article = $('<article>').addClass("creak");
    const header = $('<header>').appendTo(article);
    const h3 = $('<h3>').text(creak.username).appendTo(header);
    const main = $('<main>').appendTo(article);
    const p = $('<p>').text(creak.content).appendTo(main);
    return article;
  }

  const allCreaks = $('.all-creaks');

  function getAllCreaks() {

    $.ajax({
      method: "GET",
      url: "/creaks"
    }).done(function(creaks) {
      allCreaks.empty();

      creaks.forEach((creak) => {

        const element = createCreakElement2(creak);
        
        allCreaks.prepend(element);
      })
    });
  }

  getAllCreaks();

  $("#creakMaker").on('submit', function(event) {
    // prevent the default behavor
    event.preventDefault();
    // get the data from the form
    // const content = $(this).find('input').val();
    // ajax post request
    // console.log($(this).serialize());
    $.ajax({
      method: "POST",
      url: "/creaks",
      data: $(this).serialize()
    }).done(function() {
      // on success, refresh the creaks on the page
      getAllCreaks();
    });
  });

});


  