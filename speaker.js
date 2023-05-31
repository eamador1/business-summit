const personalities = [
    {
      id: '1',
      image: 'img/speaker1.jpeg',
      name: 'Dr. David Hanson',
      position: 'CEO Hanson Robotics',
      experience: ['The designer and researcher creates human-looking robots who have realistic facial expressions, including Sophia', 
        'and other robots designed to mimic human behavior.'],
    },
  
    {
        id: '2',
        image: 'img/speaker1.jpeg',
        name: 'Dr. David Hanson',
        position: 'CEO Hanson Robotics',
        experience: ['The designer and researcher creates human-looking robots who have realistic facial expressions, including Sophia', 
          'and other robots designed to mimic human behavior.'],
      },
  
      {
        id: '3',
        image: 'img/speaker1.jpeg',
        name: 'Dr. David Hanson',
        position: 'CEO Hanson Robotics',
        experience: ['The designer and researcher creates human-looking robots who have realistic facial expressions, including Sophia', 
          'and other robots designed to mimic human behavior.'],
      },
  
      {
        id: '4',
        image: 'img/speaker1.jpeg',
        name: 'Dr. David Hanson',
        position: 'CEO Hanson Robotics',
        experience: ['The designer and researcher creates human-looking robots who have realistic facial expressions, including Sophia', 
          'and other robots designed to mimic human behavior.'],
      },
  
        {
            id: '5',
            image: 'img/speaker1.jpeg',
            name: 'Dr. David Hanson',
            position: 'CEO Hanson Robotics',
            experience: ['The designer and researcher creates human-looking robots who have realistic facial expressions, including Sophia', 
              'and other robots designed to mimic human behavior.'],
          },
  
          {
            id: '6',
            image: 'img/speaker1.jpeg',
            name: 'Dr. David Hanson',
            position: 'CEO Hanson Robotics',
            experience: ['The designer and researcher creates human-looking robots who have realistic facial expressions, including Sophia', 
              'and other robots designed to mimic human behavior.'],
          },
  ];
  //Display Speakers

  const $speakers = document.querySelector('.speakers');

  personalities.forEach((personality, index) => {
    //Elements
    const $contSpeaker = document.createElement('div');
    const $contImage = document.createElement('div');
    const $image = document.createElement('img');
    const $contName = document.createElement('div');
    const $name = document.createElement('h4');
    const $contPosition = document.createElement('div');
    const $position = document.createElement('p');
    const $contText = document.createElement('div');
    const $text = document.createElement('p');

    //Classes

    $contSpeaker.classList.add('cont-speaker');
    $contImage.classList.add('cont-image');
    $image.classList.add('image');
    $contName.classList.add('cont-name');
    $name.classList.add('name');
    $contPosition.classList.add('cont-position');
    $position.classList.add('position');
    $contText.classList.add('cont-text');
    $text.classList.add('.text');

    //Values
    $image.setAttribute('src', personality.image);
    $name.textContent = personality.name;
    $position.textContent = personality.position;
    $text.textContent = personality.experience;

    //Append elements
    $contImage.appendChild($image);
    $contName.appendChild($name);
    $contPosition.appendChild($position);
    $contText.appendChild($text);
    $contSpeaker.appendChild($contImage);
    $contSpeaker.appendChild($contName);
    $contSpeaker.appendChild($contPosition);
    $contSpeaker.appendChild($contText);
    $speakers.appendChild($contSpeaker);

  });