import arrow from '../assets/icons/arrow.svg';
import right from '../assets/icons/right.svg';
import down from '../assets/icons/down.svg';
import windowIcon from '../assets/icons/window.svg';
import layers from '../assets/icons/layers.svg';
import nodes from '../assets/icons/nodes.svg';
import copy from '../assets/icons/copy.svg';
import check from '../assets/icons/check.svg';
import menu from '../assets/icons/menu.svg';
import close from '../assets/icons/close.svg';
import github from '../assets/icons/github.svg';
import linkedin from '../assets/icons/linkedin.svg';
import message from '../assets/icons/message.svg';
import asterisk from '../assets/icons/asterisk.svg';

const icons = {
  arrow,
  right,
  down,
  window: windowIcon,
  layers,
  nodes,
  copy,
  check,
  menu,
  close,
  github,
  linkedin,
  message,
  asterisk,
};

export default function Icon({ name = 'arrow', className = '', style, ...props }) {
  const iconUrl = Object.prototype.hasOwnProperty.call(icons, name)
    ? icons[name]
    : icons.arrow;

  return (
    <span
      {...props}
      aria-hidden="true"
      className={`icon ${className}`.trim()}
      style={{ ...style, '--icon-url': `url("${iconUrl}")` }}
    />
  );
}
