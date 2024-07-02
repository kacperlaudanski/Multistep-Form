import { filterPickOnes } from '../state/filterPickOnes';
import { findSelectedPlan } from '../state/findSelectedPlan';
import { setBillingPlan } from '../state/setBillingPlan';
import { setPlanPrice } from '../state/setPlanPrice';
import { updateTotalValue } from '../ui/updateTotalValue';
import { planOptions } from '../utilities/domElements'

export function switchBillingType() {
  findSelectedPlan(planOptions);
  setBillingPlan();
  updateTotalValue();
  filterPickOnes();
  setPlanPrice();
}
