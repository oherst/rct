import { shallow } from '@vue/test-utils';
import Player from '../src/components/player.vue';


describe('Player component', () => {

  const wrapper = shallow(Player, {
    propsData: {
      player :{
        formation_place: 1,
        name: 'ollie'
      }
    }
  });

  it('renders the player number', () => {
    expect(wrapper.find('.number').text()).toBe('1');
  });

  it('renders the player name', () => {
    expect(wrapper.find('.player-name').text()).toBe('ollie');
  });

});
