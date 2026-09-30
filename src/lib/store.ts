import { Person, DatingSession, PersonRanking } from '../types';
import { SEED_PEOPLE } from '../data/seedPeople';
import { createDatingSession, computeRankingsForPerson } from './datingEngine';

// Global state persisted in server process
class MemoryStore {
  private people: Person[] = [...SEED_PEOPLE];
  private sessions: Map<string, DatingSession> = new Map();
  private rankingsCache: Map<string, PersonRanking> = new Map();

  constructor() {
    this.precomputeSampleSessions();
  }

  private precomputeSampleSessions() {
    // Generate dates for key pairs
    for (let i = 0; i < Math.min(this.people.length, 10); i++) {
      for (let j = i + 1; j < Math.min(this.people.length, 10); j++) {
        const session = createDatingSession(this.people[i], this.people[j]);
        this.sessions.set(session.id, session);
      }
    }
  }

  getPeople(): Person[] {
    return this.people;
  }

  getPersonById(id: string): Person | undefined {
    return this.people.find(p => p.person_id === id);
  }

  addPerson(person: Person) {
    this.people.unshift(person);
    // Invalidate cached rankings
    this.rankingsCache.clear();
  }

  getSession(id: string): DatingSession | undefined {
    return this.sessions.get(id);
  }

  saveSession(session: DatingSession) {
    this.sessions.set(session.id, session);
  }

  getRankingsForPerson(personId: string): PersonRanking | null {
    if (this.rankingsCache.has(personId)) {
      return this.rankingsCache.get(personId)!;
    }

    const target = this.getPersonById(personId);
    if (!target) return null;

    const ranking = computeRankingsForPerson(target, this.people);
    this.rankingsCache.set(personId, ranking);
    return ranking;
  }
}

// Global singleton
export const store = new MemoryStore();
