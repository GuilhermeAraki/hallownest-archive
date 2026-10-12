'use client';

import { useState, useEffect, useCallback } from 'react';
import { ExplorationState } from '@/types';

const STORAGE_KEY = 'hallownest_dark_editorial_progress_v1';

const defaultState: ExplorationState = {
  visitedRegions: ['dirtmouth'],
  defeatedBosses: [],
  collectedCharms: ['wayward-compass'],
  unlockedItems: ['old-nail'],
  brokenDreamers: [],
  equippedCharms: ['wayward-compass'],
  totalNotches: 11,
  favorites: [],
  notes: ''
};

export function useExplorationProgress() {
  const [state, setState] = useState<ExplorationState>(defaultState);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setState({ ...defaultState, ...JSON.parse(stored) });
      }
    } catch {
      // Fallback to default state if localStorage is unavailable
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const saveState = useCallback((newState: ExplorationState) => {
    setState(newState);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    } catch (e) {
      console.warn('Failed to save exploration state to localStorage', e);
    }
  }, []);

  const toggleRegion = useCallback((regionId: string) => {
    setState(prev => {
      const exists = prev.visitedRegions.includes(regionId);
      const visitedRegions = exists
        ? prev.visitedRegions.filter(id => id !== regionId)
        : [...prev.visitedRegions, regionId];
      const next = { ...prev, visitedRegions };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const toggleBoss = useCallback((bossId: string) => {
    setState(prev => {
      const exists = prev.defeatedBosses.includes(bossId);
      const defeatedBosses = exists
        ? prev.defeatedBosses.filter(id => id !== bossId)
        : [...prev.defeatedBosses, bossId];
      const next = { ...prev, defeatedBosses };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const toggleCharm = useCallback((charmId: string) => {
    setState(prev => {
      const exists = prev.collectedCharms.includes(charmId);
      const collectedCharms = exists
        ? prev.collectedCharms.filter(id => id !== charmId)
        : [...prev.collectedCharms, charmId];
      // If uncollecting, also unequip
      const equippedCharms = exists
        ? prev.equippedCharms.filter(id => id !== charmId)
        : prev.equippedCharms;
      const next = { ...prev, collectedCharms, equippedCharms };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const toggleEquipCharm = useCallback((charmId: string) => {
    setState(prev => {
      const isEquipped = prev.equippedCharms.includes(charmId);
      const equippedCharms = isEquipped
        ? prev.equippedCharms.filter(id => id !== charmId)
        : [...prev.equippedCharms, charmId];
      const next = { ...prev, equippedCharms };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const toggleFavorite = useCallback((entityId: string) => {
    setState(prev => {
      const isFav = prev.favorites.includes(entityId);
      const favorites = isFav
        ? prev.favorites.filter(id => id !== entityId)
        : [...prev.favorites, entityId];
      const next = { ...prev, favorites };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const isFavorite = useCallback((entityId: string) => {
    return state.favorites.includes(entityId);
  }, [state.favorites]);

  const toggleDreamer = useCallback((dreamerId: string) => {
    setState(prev => {
      const exists = prev.brokenDreamers.includes(dreamerId);
      const brokenDreamers = exists
        ? prev.brokenDreamers.filter(id => id !== dreamerId)
        : [...prev.brokenDreamers, dreamerId];
      const next = { ...prev, brokenDreamers };
      try { localStorage.setItem(STORAGE_KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const resetAll = useCallback(() => {
    saveState(defaultState);
  }, [saveState]);

  const exportJSON = useCallback(() => {
    return JSON.stringify(state, null, 2);
  }, [state]);

  const importJSON = useCallback((jsonStr: string) => {
    try {
      const parsed = JSON.parse(jsonStr);
      saveState({ ...defaultState, ...parsed });
      return true;
    } catch {
      return false;
    }
  }, [saveState]);

  return {
    state,
    isLoaded,
    toggleRegion,
    toggleBoss,
    toggleCharm,
    toggleEquipCharm,
    toggleFavorite,
    isFavorite,
    toggleDreamer,
    resetAll,
    exportJSON,
    importJSON
  };
}
