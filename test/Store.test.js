import Store from '../src/js/store';

const state = {
  lineup: {
    formation: '4411',
    players: [
      {
        formation_place: 1
      }
    ],
    team: 'cool football team'
  }
};

describe('Store', () => {

  let store;

  beforeEach(() => {
    store = Store;
    store.replaceState(state);
  });

  it('returns the team name', () => {
    expect(store.getters.team).toBe('cool football team');
  });

  it('returns a team formation', () => {
    expect(store.getters.teamFormation).toBe('4411');
  });

  it('finds a player object', () => {
    expect(store.getters.player(1)).toEqual({formation_place: 1});
  });

  it('saves a lineup to the store', () => {
    const payload = {
      formation: '442'
    };

    store.commit('saveLineup', payload);
    expect(state.lineup.formation).toBe('442');
  });
});
