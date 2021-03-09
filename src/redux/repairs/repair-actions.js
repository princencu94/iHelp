import { repairActionTypes } from './repair-types';

export const addRepair = repair => ({
    type: repairActionTypes.ADD_REPAIR_INFO,
    payload:repair
})