"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var RouterStore_1 = require("./stores/RouterStore");
var react_2 = require("react");
var mobx_react_lite_1 = require("mobx-react-lite");
var WorkoutHistory_1 = require("./modules/WorkoutHistory");
var CurrentWorkout_1 = require("./modules/CurrentWorkout");
exports.Router = mobx_react_lite_1.observer(function () {
    var routerStore = react_2.useContext(RouterStore_1.RouterStoreContext);
    return routerStore.screen === "WorkoutHistory" ? (react_1.default.createElement(WorkoutHistory_1.WorkoutHistory, null)) : (react_1.default.createElement(CurrentWorkout_1.CurrentWorkout, null));
});
