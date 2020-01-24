import { MagitBranch } from './magitBranch';
import { Commit } from '../typings/git';

export interface MagitMergingState {
  mergingBranches: MagitBranch[];
  commits: Commit[];
}