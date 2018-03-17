import Node from './editor/Node';
document.addEventListener('contextmenu', event => event.preventDefault());

$(function() {
  const svg = d3.select('body').append('svg');
  const g = svg.append('g').attr('class', 'root');
  const workspace = g.append('g');

  new Node(50, 50, 'Load Image');
  new Node(200, 200, 'Rotate');
});
