import {
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withProps,
  withState,
} from "@ngrx/signals";
import { InitialState } from "./dashboard-state";
export const DashboardStore = signalStore(
  { providedIn: "root" },
  withState(InitialState),
  withProps(() => ({})),
  withMethods((store) => ({})),
  withComputed((store) => ({})),
  withHooks({})
);
