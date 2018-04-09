import { shallow, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '../src/components/app.vue';

const localVue = createLocalVue();

localVue.use(Vuex);

const formation = {
  row1: [1],
  row2: [2,5,6,3],
  row3: [7,4,8,11],
  row4: [10,9]
};

describe('App component', () => {
  let wrapper;
  let getters;
  let store;

  beforeEach(() => {
    getters = {
      teamFormation: () => '442',
      player: () => () => {}
    };

    store = new Vuex.Store({
      getters
    });

    wrapper = shallow(App, { store, localVue });
  });

  it('creates a player class', () => {
    expect(wrapper.vm.formationPlayer(1)).toBe('player-1');
  });

  it('creates a formation class', () => {
    expect(wrapper.vm.formationLayout).toBe('formation-442');
  });

  it('fetches the correct formation', () => {
    expect(wrapper.vm.formation).toMatchObject(formation);
  });
});
