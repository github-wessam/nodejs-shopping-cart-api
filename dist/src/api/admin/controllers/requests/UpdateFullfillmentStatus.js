"use strict";
/*
 * spurtcommerce API
 * version 4.8.2
 * Copyright (c) 2021 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateFullfillmentStatus = void 0;
const tslib_1 = require("tslib");
require("reflect-metadata");
const class_validator_1 = require("class-validator");
class UpdateFullfillmentStatus {
}
tslib_1.__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    tslib_1.__metadata("design:type", Number)
], UpdateFullfillmentStatus.prototype, "status", void 0);
exports.UpdateFullfillmentStatus = UpdateFullfillmentStatus;
//# sourceMappingURL=UpdateFullfillmentStatus.js.map