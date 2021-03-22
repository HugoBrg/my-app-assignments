import { Assignment } from './assignments';
import { Francais } from './francais-image';
import { Math } from './math-image';

export const ASSIGNMENTS: Assignment[] = [
  { id: 1,auteurid:1, auteur: 'hugo',matiere:"Mathématiques",image:Math.Image,etat:true,note:8,remarque:"Travail insuffisant",prof:Math.Prof},
  { id: 2,auteurid:1, auteur: 'hugo',matiere:"Mathématiques",image:Math.Image,etat:false,note:0,remarque:"", prof:Math.Prof},
  { id: 3,auteurid:1, auteur: 'hugo',matiere:"Mathématiques",image:Math.Image,etat:true,note:12,remarque:"Superbe devoir", prof:Math.Prof},
  { id: 4,auteurid:2, auteur: 'remi',matiere:"Français",image:Francais.Image,etat:false,note:0,remarque:"", prof:Francais.Prof},
  { id: 5,auteurid:2, auteur: 'remi',matiere:"Français",image:Francais.Image, etat:false,note:0,remarque:"", prof:Francais.Prof},
  { id: 6,auteurid:2, auteur: 'remi',matiere:"Français",image:Francais.Image, etat:true,note:16,remarque:"Excellent", prof:Francais.Prof},
];