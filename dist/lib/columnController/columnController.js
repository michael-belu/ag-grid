/**
 * ag-grid - Advanced Data Grid / Data Table supporting Javascript / React / AngularJS / Web Components
 * @version v4.1.5
 * @link http://www.ag-grid.com/
 * @license MIT
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var utils_1 = require("../utils");
var columnGroup_1 = require("../entities/columnGroup");
var column_1 = require("../entities/column");
var gridOptionsWrapper_1 = require("../gridOptionsWrapper");
var expressionService_1 = require("../expressionService");
var balancedColumnTreeBuilder_1 = require("./balancedColumnTreeBuilder");
var displayedGroupCreator_1 = require("./displayedGroupCreator");
var autoWidthCalculator_1 = require("../rendering/autoWidthCalculator");
var eventService_1 = require("../eventService");
var columnUtils_1 = require("./columnUtils");
var logger_1 = require("../logger");
var events_1 = require("../events");
var columnChangeEvent_1 = require("../columnChangeEvent");
var originalColumnGroup_1 = require("../entities/originalColumnGroup");
var groupInstanceIdCreator_1 = require("./groupInstanceIdCreator");
var functions_1 = require("../functions");
var context_1 = require("../context/context");
var gridPanel_1 = require("../gridPanel/gridPanel");
var pivotService_1 = require("./pivotService");
var ColumnApi = (function () {
    function ColumnApi() {
    }
    ColumnApi.prototype.sizeColumnsToFit = function (gridWidth) { this._columnController.sizeColumnsToFit(gridWidth); };
    ColumnApi.prototype.setColumnGroupOpened = function (group, newValue, instanceId) { this._columnController.setColumnGroupOpened(group, newValue, instanceId); };
    ColumnApi.prototype.getColumnGroup = function (name, instanceId) { return this._columnController.getColumnGroup(name, instanceId); };
    ColumnApi.prototype.getDisplayNameForCol = function (column) { return this._columnController.getDisplayNameForCol(column); };
    ColumnApi.prototype.getColumn = function (key) { return this._columnController.getOriginalColumn(key); };
    ColumnApi.prototype.setColumnState = function (columnState) { return this._columnController.setColumnState(columnState); };
    ColumnApi.prototype.getColumnState = function () { return this._columnController.getColumnState(); };
    ColumnApi.prototype.resetColumnState = function () { this._columnController.resetColumnState(); };
    ColumnApi.prototype.isPinning = function () { return this._columnController.isPinningLeft() || this._columnController.isPinningRight(); };
    ColumnApi.prototype.isPinningLeft = function () { return this._columnController.isPinningLeft(); };
    ColumnApi.prototype.isPinningRight = function () { return this._columnController.isPinningRight(); };
    ColumnApi.prototype.getDisplayedColAfter = function (col) { return this._columnController.getDisplayedColAfter(col); };
    ColumnApi.prototype.getDisplayedColBefore = function (col) { return this._columnController.getDisplayedColBefore(col); };
    ColumnApi.prototype.setColumnVisible = function (key, visible) { this._columnController.setColumnVisible(key, visible); };
    ColumnApi.prototype.setColumnsVisible = function (keys, visible) { this._columnController.setColumnsVisible(keys, visible); };
    ColumnApi.prototype.setColumnPinned = function (key, pinned) { this._columnController.setColumnPinned(key, pinned); };
    ColumnApi.prototype.setColumnsPinned = function (keys, pinned) { this._columnController.setColumnsPinned(keys, pinned); };
    ColumnApi.prototype.getAllColumns = function () { return this._columnController.getAllOriginalColumns(); };
    ColumnApi.prototype.getDisplayedLeftColumns = function () { return this._columnController.getDisplayedLeftColumns(); };
    ColumnApi.prototype.getDisplayedCenterColumns = function () { return this._columnController.getDisplayedCenterColumns(); };
    ColumnApi.prototype.getDisplayedRightColumns = function () { return this._columnController.getDisplayedRightColumns(); };
    ColumnApi.prototype.getAllDisplayedColumns = function () { return this._columnController.getAllDisplayedColumns(); };
    ColumnApi.prototype.getRowGroupColumns = function () { return this._columnController.getRowGroupColumns(); };
    ColumnApi.prototype.getValueColumns = function () { return this._columnController.getValueColumns(); };
    ColumnApi.prototype.moveColumn = function (fromIndex, toIndex) { this._columnController.moveColumnByIndex(fromIndex, toIndex); };
    ColumnApi.prototype.moveRowGroupColumn = function (fromIndex, toIndex) { this._columnController.moveRowGroupColumn(fromIndex, toIndex); };
    ColumnApi.prototype.setColumnAggFunction = function (column, aggFunc) { this._columnController.setColumnAggFunction(column, aggFunc); };
    ColumnApi.prototype.setColumnWidth = function (key, newWidth, finished) {
        if (finished === void 0) { finished = true; }
        this._columnController.setColumnWidth(key, newWidth, finished);
    };
    ColumnApi.prototype.removeValueColumn = function (column) { this._columnController.removeValueColumn(column); };
    ColumnApi.prototype.addValueColumn = function (column) { this._columnController.addValueColumn(column); };
    ColumnApi.prototype.setRowGroupColumns = function (colKeys) { this._columnController.setRowGroupColumns(colKeys); };
    ColumnApi.prototype.removeRowGroupColumn = function (colKey) { this._columnController.removeRowGroupColumn(colKey); };
    ColumnApi.prototype.removeRowGroupColumns = function (colKeys) { this._columnController.removeRowGroupColumns(colKeys); };
    ColumnApi.prototype.addRowGroupColumn = function (colKey) { this._columnController.addRowGroupColumn(colKey); };
    ColumnApi.prototype.addRowGroupColumns = function (colKeys) { this._columnController.addRowGroupColumns(colKeys); };
    ColumnApi.prototype.setPivotColumns = function (colKeys) { this._columnController.setPivotColumns(colKeys); };
    ColumnApi.prototype.removePivotColumn = function (colKey) { this._columnController.removePivotColumn(colKey); };
    ColumnApi.prototype.removePivotColumns = function (colKeys) { this._columnController.removePivotColumns(colKeys); };
    ColumnApi.prototype.addPivotColumn = function (colKey) { this._columnController.addPivotColumn(colKey); };
    ColumnApi.prototype.addPivotColumns = function (colKeys) { this._columnController.addPivotColumns(colKeys); };
    ColumnApi.prototype.getLeftDisplayedColumnGroups = function () { return this._columnController.getLeftDisplayedColumnGroups(); };
    ColumnApi.prototype.getCenterDisplayedColumnGroups = function () { return this._columnController.getCenterDisplayedColumnGroups(); };
    ColumnApi.prototype.getRightDisplayedColumnGroups = function () { return this._columnController.getRightDisplayedColumnGroups(); };
    ColumnApi.prototype.getAllDisplayedColumnGroups = function () { return this._columnController.getAllDisplayedColumnGroups(); };
    ColumnApi.prototype.autoSizeColumn = function (key) { return this._columnController.autoSizeColumn(key); };
    ColumnApi.prototype.autoSizeColumns = function (keys) { return this._columnController.autoSizeColumns(keys); };
    ColumnApi.prototype.columnGroupOpened = function (group, newValue) {
        console.error('ag-Grid: columnGroupOpened no longer exists, use setColumnGroupOpened');
        this.setColumnGroupOpened(group, newValue);
    };
    ColumnApi.prototype.hideColumns = function (colIds, hide) {
        console.error('ag-Grid: hideColumns is deprecated, use setColumnsVisible');
        this._columnController.setColumnsVisible(colIds, !hide);
    };
    ColumnApi.prototype.hideColumn = function (colId, hide) {
        console.error('ag-Grid: hideColumn is deprecated, use setColumnVisible');
        this._columnController.setColumnVisible(colId, !hide);
    };
    ColumnApi.prototype.setState = function (columnState) {
        console.error('ag-Grid: setState is deprecated, use setColumnState');
        return this.setColumnState(columnState);
    };
    ColumnApi.prototype.getState = function () {
        console.error('ag-Grid: hideColumn is getState, use getColumnState');
        return this.getColumnState();
    };
    ColumnApi.prototype.resetState = function () {
        console.error('ag-Grid: hideColumn is resetState, use resetColumnState');
        this.resetColumnState();
    };
    __decorate([
        context_1.Autowired('columnController'), 
        __metadata('design:type', ColumnController)
    ], ColumnApi.prototype, "_columnController", void 0);
    ColumnApi = __decorate([
        context_1.Bean('columnApi'), 
        __metadata('design:paramtypes', [])
    ], ColumnApi);
    return ColumnApi;
})();
exports.ColumnApi = ColumnApi;
var ColumnController = (function () {
    function ColumnController() {
        // header row count, based on user provided columns
        this.originalHeaderRowCount = 0;
        // header row count, either above, or based on pivoting if we are pivoting
        this.gridHeaderRowCount = 0;
        // these are the lists used by the rowRenderer to render nodes. almost the leaf nodes of the above
        // displayed trees, however it also takes into account if the groups are open or not.
        this.displayedLeftColumns = [];
        this.displayedRightColumns = [];
        this.displayedCenterColumns = [];
        this.ready = false;
    }
    ColumnController.prototype.init = function () {
        if (this.gridOptionsWrapper.getColumnDefs()) {
            this.setColumnDefs(this.gridOptionsWrapper.getColumnDefs());
        }
        // this.eventService.addEventListener(Events.EVENT_PIVOT_VALUE_CHANGED, this.onPivotValueChanged.bind(this));
    };
    ColumnController.prototype.isReduce = function () {
        return this.pivotColumns.length > 0;
    };
    ColumnController.prototype.setBeans = function (loggerFactory) {
        this.logger = loggerFactory.create('ColumnController');
    };
    ColumnController.prototype.setFirstRightAndLastLeftPinned = function () {
        var lastLeft = this.displayedLeftColumns ? this.displayedLeftColumns[this.displayedLeftColumns.length - 1] : null;
        var firstRight = this.displayedRightColumns ? this.displayedRightColumns[0] : null;
        this.originalColumns.forEach(function (column) {
            column.setLastLeftPinned(column === lastLeft);
            column.setFirstRightPinned(column === firstRight);
        });
    };
    ColumnController.prototype.autoSizeColumns = function (keys) {
        var _this = this;
        this.actionOnColumns(keys, function (column) {
            var requiredWidth = _this.autoWidthCalculator.getPreferredWidthForColumn(column);
            if (requiredWidth > 0) {
                var newWidth = _this.normaliseColumnWidth(column, requiredWidth);
                column.setActualWidth(newWidth);
            }
        }, function () {
            return new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_RESIZED).withFinished(true);
        });
    };
    ColumnController.prototype.autoSizeColumn = function (key) {
        this.autoSizeColumns([key]);
    };
    ColumnController.prototype.autoSizeAllColumns = function () {
        var allDisplayedColumns = this.getAllDisplayedColumns();
        this.autoSizeColumns(allDisplayedColumns);
    };
    ColumnController.prototype.getColumnsFromTree = function (rootColumns) {
        var result = [];
        recursiveFindColumns(rootColumns);
        return result;
        function recursiveFindColumns(childColumns) {
            for (var i = 0; i < childColumns.length; i++) {
                var child = childColumns[i];
                if (child instanceof column_1.Column) {
                    result.push(child);
                }
                else if (child instanceof originalColumnGroup_1.OriginalColumnGroup) {
                    recursiveFindColumns(child.getChildren());
                }
            }
        }
    };
    ColumnController.prototype.getAllDisplayedColumnGroups = function () {
        if (this.displayedLeftColumnTree && this.displayedRightColumnTree && this.displayedCentreColumnTree) {
            return this.displayedLeftColumnTree
                .concat(this.displayedCentreColumnTree)
                .concat(this.displayedRightColumnTree);
        }
        else {
            return null;
        }
    };
    ColumnController.prototype.getOriginalColumnTree = function () {
        return this.originalBalancedTree;
    };
    // + gridPanel -> for resizing the body and setting top margin
    ColumnController.prototype.getHeaderRowCount = function () {
        return this.gridHeaderRowCount;
    };
    // + headerRenderer -> setting pinned body width
    ColumnController.prototype.getLeftDisplayedColumnGroups = function () {
        return this.displayedLeftColumnTree;
    };
    // + headerRenderer -> setting pinned body width
    ColumnController.prototype.getRightDisplayedColumnGroups = function () {
        return this.displayedRightColumnTree;
    };
    // + headerRenderer -> setting pinned body width
    ColumnController.prototype.getCenterDisplayedColumnGroups = function () {
        return this.displayedCentreColumnTree;
    };
    ColumnController.prototype.getDisplayedColumnGroups = function (type) {
        switch (type) {
            case column_1.Column.PINNED_LEFT: return this.getLeftDisplayedColumnGroups();
            case column_1.Column.PINNED_RIGHT: return this.getRightDisplayedColumnGroups();
            default: return this.getCenterDisplayedColumnGroups();
        }
    };
    // gridPanel -> ensureColumnVisible
    ColumnController.prototype.isColumnDisplayed = function (column) {
        return this.getAllDisplayedColumns().indexOf(column) >= 0;
    };
    // + csvCreator
    ColumnController.prototype.getAllDisplayedColumns = function () {
        // order we add the arrays together is important, so the result
        // has the columns left to right, as they appear on the screen.
        return this.displayedLeftColumns
            .concat(this.displayedCenterColumns)
            .concat(this.displayedRightColumns);
    };
    // used by:
    // + angularGrid -> setting pinned body width
    // todo: this needs to be cached
    ColumnController.prototype.getPinnedLeftContainerWidth = function () {
        return this.getWithOfColsInList(this.displayedLeftColumns);
    };
    // todo: this needs to be cached
    ColumnController.prototype.getPinnedRightContainerWidth = function () {
        return this.getWithOfColsInList(this.displayedRightColumns);
    };
    ColumnController.prototype.addRowGroupColumns = function (keys) {
        var _this = this;
        keys.forEach(function (key) {
            var column = _this.getOriginalColumn(key);
            if (column) {
                _this.rowGroupColumns.push(column);
            }
        });
        // because we could be taking out columns, the displayed
        // columns may differ, so need to work out all the columns again.
        // this is why why don't use 'actionOnColumns', as we need to do
        // this before we fire the event
        this.updateModel();
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_ROW_GROUP_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_ROW_GROUP_CHANGED, event);
    };
    ColumnController.prototype.setRowGroupColumns = function (keys) {
        this.rowGroupColumns.length = 0;
        this.addRowGroupColumns(keys);
    };
    ColumnController.prototype.addRowGroupColumn = function (key) {
        this.addRowGroupColumns([key]);
    };
    ColumnController.prototype.removeRowGroupColumns = function (keys) {
        var _this = this;
        keys.forEach(function (key) {
            var column = _this.getOriginalColumn(key);
            if (column) {
                utils_1.Utils.removeFromArray(_this.rowGroupColumns, column);
            }
        });
        this.updateModel();
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_ROW_GROUP_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_ROW_GROUP_CHANGED, event);
    };
    ColumnController.prototype.removeRowGroupColumn = function (key) {
        this.removeRowGroupColumns([key]);
    };
    ColumnController.prototype.addPivotColumns = function (keys) {
        var _this = this;
        keys.forEach(function (key) {
            var column = _this.getOriginalColumn(key);
            if (column) {
                _this.pivotColumns.push(column);
            }
        });
        // as with changing rowGroupColumn, changing the pivot totally changes
        // the columns that are displayed, so we don't use 'actionOnColumns', as 
        // we need to do this before we fire the event
        this.updateModel();
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_PIVOT_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_PIVOT_CHANGED, event);
    };
    ColumnController.prototype.setPivotColumns = function (keys) {
        this.pivotColumns.length = 0;
        this.addPivotColumns(keys);
    };
    ColumnController.prototype.addPivotColumn = function (key) {
        this.addPivotColumns([key]);
    };
    ColumnController.prototype.removePivotColumns = function (keys) {
        var _this = this;
        keys.forEach(function (key) {
            var column = _this.getOriginalColumn(key);
            if (column) {
                utils_1.Utils.removeFromArray(_this.pivotColumns, column);
            }
        });
        this.updateModel();
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_PIVOT_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_PIVOT_CHANGED, event);
    };
    ColumnController.prototype.removePivotColumn = function (key) {
        this.removePivotColumns([key]);
    };
    ColumnController.prototype.addValueColumn = function (column) {
        if (this.originalColumns.indexOf(column) < 0) {
            console.warn('not a valid column: ' + column);
            return;
        }
        if (this.valueColumns.indexOf(column) >= 0) {
            console.warn('column is already a value column');
            return;
        }
        if (!column.getAggFunc()) {
            column.setAggFunc(column_1.Column.AGG_SUM);
        }
        this.valueColumns.push(column);
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_VALUE_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_VALUE_CHANGED, event);
    };
    ColumnController.prototype.removeValueColumn = function (column) {
        if (this.valueColumns.indexOf(column) < 0) {
            console.warn('column not a value');
            return;
        }
        utils_1.Utils.removeFromArray(this.valueColumns, column);
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_VALUE_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_VALUE_CHANGED, event);
    };
    // returns the width we can set to this col, taking into consideration min and max widths
    ColumnController.prototype.normaliseColumnWidth = function (column, newWidth) {
        if (newWidth < column.getMinWidth()) {
            newWidth = column.getMinWidth();
        }
        if (column.isGreaterThanMax(newWidth)) {
            newWidth = column.getMaxWidth();
        }
        return newWidth;
    };
    ColumnController.prototype.setColumnWidth = function (key, newWidth, finished) {
        var column = this.getOriginalColumn(key);
        if (!column) {
            return;
        }
        newWidth = this.normaliseColumnWidth(column, newWidth);
        var widthChanged = column.getActualWidth() !== newWidth;
        if (widthChanged) {
            column.setActualWidth(newWidth);
            this.setLeftValues();
        }
        // check for change first, to avoid unnecessary firing of events
        // however we always fire 'finished' events. this is important
        // when groups are resized, as if the group is changing slowly,
        // eg 1 pixel at a time, then each change will fire change events
        // in all the columns in the group, but only one with get the pixel.
        if (finished || widthChanged) {
            var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_RESIZED).withColumn(column).withFinished(finished);
            this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_RESIZED, event);
        }
    };
    ColumnController.prototype.setColumnAggFunction = function (column, aggFunc) {
        column.setAggFunc(aggFunc);
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_VALUE_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_VALUE_CHANGED, event);
    };
    ColumnController.prototype.moveRowGroupColumn = function (fromIndex, toIndex) {
        var column = this.rowGroupColumns[fromIndex];
        this.rowGroupColumns.splice(fromIndex, 1);
        this.rowGroupColumns.splice(toIndex, 0, column);
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_ROW_GROUP_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_ROW_GROUP_CHANGED, event);
    };
    ColumnController.prototype.moveColumns = function (columnsToMoveKeys, toIndex) {
        if (toIndex > this.gridColumns.length - columnsToMoveKeys.length) {
            console.warn('ag-Grid: tried to insert columns in invalid location, toIndex = ' + toIndex);
            console.warn('ag-Grid: remember that you should not count the moving columns when calculating the new index');
            return;
        }
        // we want to pull all the columns out first and put them into an ordered list
        var columnsToMove = this.getGridColumns(columnsToMoveKeys);
        var failedRules = !this.doesMovePassRules(columnsToMove, toIndex);
        if (failedRules) {
            return;
        }
        this.gridPanel.turnOnAnimationForABit();
        utils_1.Utils.moveInArray(this.gridColumns, columnsToMove, toIndex);
        this.updateModel();
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_MOVED)
            .withToIndex(toIndex)
            .withColumns(columnsToMove);
        if (columnsToMove.length === 1) {
            event.withColumn(columnsToMove[0]);
        }
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_MOVED, event);
    };
    ColumnController.prototype.doesMovePassRules = function (columnsToMove, toIndex) {
        var allColumnsCopy = this.gridColumns.slice();
        utils_1.Utils.moveInArray(allColumnsCopy, columnsToMove, toIndex);
        // look for broken groups, ie stray columns from groups that should be married
        for (var index = 0; index < (allColumnsCopy.length - 1); index++) {
            var thisColumn = allColumnsCopy[index];
            var nextColumn = allColumnsCopy[index + 1];
            // skip hidden columns
            if (!nextColumn.isVisible()) {
                continue;
            }
            var thisPath = this.columnUtils.getOriginalPathForColumn(thisColumn, this.gridBalancedTree);
            var nextPath = this.columnUtils.getOriginalPathForColumn(nextColumn, this.gridBalancedTree);
            if (!nextPath || !thisPath) {
                console.log('next path is missing');
            }
            // start at the top of the path and work down
            for (var dept = 0; dept < thisPath.length; dept++) {
                var thisOriginalGroup = thisPath[dept];
                var nextOriginalGroup = nextPath[dept];
                var lastColInGroup = thisOriginalGroup !== nextOriginalGroup;
                // a runaway is a column from this group that left the group, and the group has it's children marked as married
                var colGroupDef = thisOriginalGroup.getColGroupDef();
                var marryChildren = colGroupDef && colGroupDef.marryChildren;
                var needToCheckForRunaways = lastColInGroup && marryChildren;
                if (needToCheckForRunaways) {
                    for (var tailIndex = index + 1; tailIndex < allColumnsCopy.length; tailIndex++) {
                        var tailColumn = allColumnsCopy[tailIndex];
                        var tailPath = this.columnUtils.getOriginalPathForColumn(tailColumn, this.gridBalancedTree);
                        var tailOriginalGroup = tailPath[dept];
                        if (tailOriginalGroup === thisOriginalGroup) {
                            return false;
                        }
                    }
                }
            }
        }
        return true;
    };
    ColumnController.prototype.moveColumn = function (key, toIndex) {
        this.moveColumns([key], toIndex);
    };
    ColumnController.prototype.moveColumnByIndex = function (fromIndex, toIndex) {
        var column = this.originalColumns[fromIndex];
        this.moveColumn(column, toIndex);
    };
    // used by:
    // + angularGrid -> for setting body width
    // + rowController -> setting main row widths (when inserting and resizing)
    // need to cache this
    ColumnController.prototype.getBodyContainerWidth = function () {
        var result = this.getWithOfColsInList(this.displayedCenterColumns);
        return result;
    };
    // + rowController
    ColumnController.prototype.getValueColumns = function () {
        return this.valueColumns ? this.valueColumns : [];
    };
    // + rowController
    ColumnController.prototype.getPivotColumns = function () {
        return this.pivotColumns ? this.pivotColumns : [];
    };
    // + toolPanel
    ColumnController.prototype.getRowGroupColumns = function () {
        return this.rowGroupColumns ? this.rowGroupColumns : [];
    };
    ColumnController.prototype.isColumnRowGrouped = function (column) {
        return this.rowGroupColumns.indexOf(column) >= 0;
    };
    ColumnController.prototype.isColumnPivoted = function (column) {
        return this.pivotColumns.indexOf(column) >= 0;
    };
    // + rowController -> while inserting rows
    ColumnController.prototype.getDisplayedCenterColumns = function () {
        return this.displayedCenterColumns.slice(0);
    };
    // + rowController -> while inserting rows
    ColumnController.prototype.getDisplayedLeftColumns = function () {
        return this.displayedLeftColumns.slice(0);
    };
    ColumnController.prototype.getDisplayedRightColumns = function () {
        return this.displayedRightColumns.slice(0);
    };
    ColumnController.prototype.getDisplayedColumns = function (type) {
        switch (type) {
            case column_1.Column.PINNED_LEFT: return this.getDisplayedLeftColumns();
            case column_1.Column.PINNED_RIGHT: return this.getDisplayedRightColumns();
            default: return this.getDisplayedCenterColumns();
        }
    };
    // used by:
    // + inMemoryRowController -> sorting, building quick filter text
    // + headerRenderer -> sorting (clearing icon)
    ColumnController.prototype.getAllOriginalColumns = function () {
        return this.originalColumns;
    };
    // + moveColumnController
    ColumnController.prototype.getAllGridColumns = function () {
        return this.gridColumns;
    };
    ColumnController.prototype.isEmpty = function () {
        return utils_1.Utils.missingOrEmpty(this.originalColumns);
    };
    ColumnController.prototype.isRowGroupEmpty = function () {
        return utils_1.Utils.missingOrEmpty(this.rowGroupColumns);
    };
    ColumnController.prototype.setColumnVisible = function (key, visible) {
        this.setColumnsVisible([key], visible);
    };
    ColumnController.prototype.setColumnsVisible = function (keys, visible) {
        this.gridPanel.turnOnAnimationForABit();
        this.actionOnColumns(keys, function (column) {
            column.setVisible(visible);
        }, function () {
            return new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_VISIBLE).withVisible(visible);
        });
    };
    ColumnController.prototype.setColumnPinned = function (key, pinned) {
        this.setColumnsPinned([key], pinned);
    };
    ColumnController.prototype.setColumnsPinned = function (keys, pinned) {
        this.gridPanel.turnOnAnimationForABit();
        var actualPinned;
        if (pinned === true || pinned === column_1.Column.PINNED_LEFT) {
            actualPinned = column_1.Column.PINNED_LEFT;
        }
        else if (pinned === column_1.Column.PINNED_RIGHT) {
            actualPinned = column_1.Column.PINNED_RIGHT;
        }
        else {
            actualPinned = null;
        }
        this.actionOnColumns(keys, function (column) {
            column.setPinned(actualPinned);
        }, function () {
            return new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_PINNED).withPinned(actualPinned);
        });
    };
    // does an action on a set of columns. provides common functionality for looking up the
    // columns based on key, getting a list of effected columns, and then updated the event
    // with either one column (if it was just one col) or a list of columns
    ColumnController.prototype.actionOnColumns = function (keys, action, createEvent) {
        var _this = this;
        if (!keys || keys.length === 0) {
            return;
        }
        var updatedColumns = [];
        keys.forEach(function (key) {
            var column = _this.getOriginalColumn(key);
            if (!column) {
                return;
            }
            action(column);
            updatedColumns.push(column);
        });
        if (updatedColumns.length === 0) {
            return;
        }
        this.updateModel();
        var event = createEvent();
        event.withColumns(updatedColumns);
        if (updatedColumns.length === 1) {
            event.withColumn(updatedColumns[0]);
        }
        this.eventService.dispatchEvent(event.getType(), event);
    };
    ColumnController.prototype.getDisplayedColBefore = function (col) {
        var allDisplayedColumns = this.getAllDisplayedColumns();
        var oldIndex = allDisplayedColumns.indexOf(col);
        if (oldIndex > 0) {
            return allDisplayedColumns[oldIndex - 1];
        }
        else {
            return null;
        }
    };
    // used by:
    // + rowRenderer -> for navigation
    ColumnController.prototype.getDisplayedColAfter = function (col) {
        var allDisplayedColumns = this.getAllDisplayedColumns();
        var oldIndex = allDisplayedColumns.indexOf(col);
        if (oldIndex < (allDisplayedColumns.length - 1)) {
            return allDisplayedColumns[oldIndex + 1];
        }
        else {
            return null;
        }
    };
    ColumnController.prototype.isPinningLeft = function () {
        return this.displayedLeftColumns.length > 0;
    };
    ColumnController.prototype.isPinningRight = function () {
        return this.displayedRightColumns.length > 0;
    };
    ColumnController.prototype.getAllColumnsIncludingAuto = function () {
        var result = this.originalColumns.slice(0);
        if (this.groupAutoColumnActive) {
            result.push(this.groupAutoColumn);
        }
        return result;
    };
    ColumnController.prototype.getColumnState = function () {
        if (!this.originalColumns || this.originalColumns.length < 0) {
            return [];
        }
        var result = [];
        for (var i = 0; i < this.originalColumns.length; i++) {
            var column = this.originalColumns[i];
            var rowGroupIndex = this.rowGroupColumns.indexOf(column);
            var resultItem = {
                colId: column.getColId(),
                hide: !column.isVisible(),
                aggFunc: column.getAggFunc() ? column.getAggFunc() : null,
                width: column.getActualWidth(),
                pinned: column.getPinned(),
                rowGroupIndex: rowGroupIndex >= 0 ? rowGroupIndex : null
            };
            result.push(resultItem);
        }
        return result;
    };
    ColumnController.prototype.resetColumnState = function () {
        // we can't use 'allColumns' as the order might of messed up, so get the original ordered list
        var originalColumns = this.getColumnsFromTree(this.originalBalancedTree);
        var state = [];
        if (originalColumns) {
            originalColumns.forEach(function (column) {
                state.push({
                    colId: column.getColId(),
                    aggFunc: column.getColDef().aggFunc,
                    hide: column.getColDef().hide,
                    pinned: column.getColDef().pinned,
                    rowGroupIndex: column.getColDef().rowGroupIndex,
                    width: column.getColDef().width
                });
            });
        }
        this.setColumnState(state);
    };
    ColumnController.prototype.setColumnState = function (columnState) {
        var _this = this;
        var oldColumnList = this.originalColumns;
        this.originalColumns = [];
        this.rowGroupColumns = [];
        this.valueColumns = [];
        var success = true;
        if (columnState) {
            columnState.forEach(function (stateItem) {
                var oldColumn = utils_1.Utils.find(oldColumnList, 'colId', stateItem.colId);
                if (!oldColumn) {
                    console.warn('ag-grid: column ' + stateItem.colId + ' not found');
                    success = false;
                    return;
                }
                // following ensures we are left with boolean true or false, eg converts (null, undefined, 0) all to true
                oldColumn.setVisible(!stateItem.hide);
                // sets pinned to 'left' or 'right'
                oldColumn.setPinned(stateItem.pinned);
                // if width provided and valid, use it, otherwise stick with the old width
                if (stateItem.width >= _this.gridOptionsWrapper.getMinColWidth()) {
                    oldColumn.setActualWidth(stateItem.width);
                }
                // accept agg func only if valid
                var aggFuncValid = [column_1.Column.AGG_MIN, column_1.Column.AGG_MAX, column_1.Column.AGG_SUM, column_1.Column.AGG_FIRST, column_1.Column.AGG_LAST].indexOf(stateItem.aggFunc) >= 0;
                if (aggFuncValid) {
                    oldColumn.setAggFunc(stateItem.aggFunc);
                    _this.valueColumns.push(oldColumn);
                }
                else {
                    oldColumn.setAggFunc(null);
                }
                // if rowGroup
                if (typeof stateItem.rowGroupIndex === 'number' && stateItem.rowGroupIndex >= 0) {
                    _this.rowGroupColumns.push(oldColumn);
                }
                _this.originalColumns.push(oldColumn);
                oldColumnList.splice(oldColumnList.indexOf(oldColumn), 1);
            });
        }
        // anything left over, we got no data for, so add in the column as non-value, non-rowGroup and hidden
        oldColumnList.forEach(function (oldColumn) {
            oldColumn.setVisible(false);
            oldColumn.setAggFunc(null);
            oldColumn.setPinned(null);
            _this.originalColumns.push(oldColumn);
        });
        // sort the row group columns
        this.rowGroupColumns.sort(function (colA, colB) {
            var rowGroupIndexA = -1;
            var rowGroupIndexB = -1;
            for (var i = 0; i < columnState.length; i++) {
                var state = columnState[i];
                if (state.colId === colA.getColId()) {
                    rowGroupIndexA = state.rowGroupIndex;
                }
                if (state.colId === colB.getColId()) {
                    rowGroupIndexB = state.rowGroupIndex;
                }
            }
            return rowGroupIndexA - rowGroupIndexB;
        });
        this.updateModel();
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_EVERYTHING_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_EVERYTHING_CHANGED, event);
        return success;
    };
    ColumnController.prototype.getOriginalColumns = function (keys) {
        return this.getColumns(keys, this.getOriginalColumn.bind(this));
    };
    ColumnController.prototype.getGridColumns = function (keys) {
        return this.getColumns(keys, this.getGridColumn.bind(this));
    };
    ColumnController.prototype.getColumns = function (keys, columnLookupCallback) {
        var foundColumns = [];
        if (keys) {
            keys.forEach(function (key) {
                var column = columnLookupCallback(key);
                if (column) {
                    foundColumns.push(column);
                }
            });
        }
        return foundColumns;
    };
    // used by growGroupPanel
    ColumnController.prototype.getColumnWithValidation = function (key) {
        var column = this.getOriginalColumn(key);
        if (!column) {
            console.warn('ag-Grid: could not find column ' + column);
        }
        return column;
    };
    ColumnController.prototype.getOriginalColumn = function (key) {
        return this.getColumn(key, this.originalColumns);
    };
    ColumnController.prototype.getGridColumn = function (key) {
        return this.getColumn(key, this.gridColumns);
    };
    ColumnController.prototype.getColumn = function (key, columnList) {
        if (!key) {
            return null;
        }
        for (var i = 0; i < columnList.length; i++) {
            if (colMatches(columnList[i])) {
                return columnList[i];
            }
        }
        if (this.groupAutoColumnActive && colMatches(this.groupAutoColumn)) {
            return this.groupAutoColumn;
        }
        function colMatches(column) {
            var columnMatches = column === key;
            var colDefMatches = column.getColDef() === key;
            var idMatches = column.getColId() === key;
            return columnMatches || colDefMatches || idMatches;
        }
        return null;
    };
    ColumnController.prototype.getDisplayNameForCol = function (column) {
        var colDef = column.colDef;
        var headerValueGetter = colDef.headerValueGetter;
        if (headerValueGetter) {
            var params = {
                colDef: colDef,
                api: this.gridOptionsWrapper.getApi(),
                context: this.gridOptionsWrapper.getContext()
            };
            if (typeof headerValueGetter === 'function') {
                // valueGetter is a function, so just call it
                return headerValueGetter(params);
            }
            else if (typeof headerValueGetter === 'string') {
                // valueGetter is an expression, so execute the expression
                return this.expressionService.evaluate(headerValueGetter, params);
            }
            else {
                console.warn('ag-grid: headerValueGetter must be a function or a string');
            }
        }
        else if (colDef.displayName) {
            console.warn("ag-grid: Found displayName " + colDef.displayName + ", please use headerName instead, displayName is deprecated.");
            return colDef.displayName;
        }
        else {
            return colDef.headerName;
        }
    };
    // returns the group with matching colId and instanceId. If instanceId is missing,
    // matches only on the colId.
    ColumnController.prototype.getColumnGroup = function (colId, instanceId) {
        if (!colId) {
            return null;
        }
        if (colId instanceof columnGroup_1.ColumnGroup) {
            return colId;
        }
        var allColumnGroups = this.getAllDisplayedColumnGroups();
        var checkInstanceId = typeof instanceId === 'number';
        var result = null;
        this.columnUtils.deptFirstAllColumnTreeSearch(allColumnGroups, function (child) {
            if (child instanceof columnGroup_1.ColumnGroup) {
                var columnGroup = child;
                var matched;
                if (checkInstanceId) {
                    matched = colId === columnGroup.getGroupId() && instanceId === columnGroup.getInstanceId();
                }
                else {
                    matched = colId === columnGroup.getGroupId();
                }
                if (matched) {
                    result = columnGroup;
                }
            }
        });
        return result;
    };
    ColumnController.prototype.getColumnDept = function () {
        var dept = 0;
        getDept(this.getAllDisplayedColumnGroups(), 1);
        return dept;
        function getDept(children, currentDept) {
            if (dept < currentDept) {
                dept = currentDept;
            }
            if (dept > currentDept) {
                return;
            }
            children.forEach(function (child) {
                if (child instanceof columnGroup_1.ColumnGroup) {
                    var columnGroup = child;
                    getDept(columnGroup.getChildren(), currentDept + 1);
                }
            });
        }
    };
    ColumnController.prototype.setColumnDefs = function (columnDefs) {
        var balancedTreeResult = this.balancedColumnTreeBuilder.createBalancedColumnGroups(columnDefs);
        this.originalBalancedTree = balancedTreeResult.balancedTree;
        this.originalHeaderRowCount = balancedTreeResult.treeDept + 1;
        this.originalColumns = this.getColumnsFromTree(this.originalBalancedTree);
        this.extractRowGroupColumns();
        this.extractPivotColumns();
        this.createValueColumns();
        this.setupGridColumns();
        this.updateModel();
        this.ready = true;
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_EVERYTHING_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_EVERYTHING_CHANGED, event);
        this.eventService.dispatchEvent(events_1.Events.EVENT_NEW_COLUMNS_LOADED);
    };
    ColumnController.prototype.isReady = function () {
        return this.ready;
    };
    ColumnController.prototype.extractRowGroupColumns = function () {
        var _this = this;
        this.rowGroupColumns = [];
        // pull out the columns
        this.originalColumns.forEach(function (column) {
            if (typeof column.getColDef().rowGroupIndex === 'number') {
                _this.rowGroupColumns.push(column);
            }
        });
        // then sort them
        this.rowGroupColumns.sort(function (colA, colB) {
            return colA.getColDef().rowGroupIndex - colB.getColDef().rowGroupIndex;
        });
    };
    ColumnController.prototype.extractPivotColumns = function () {
        var _this = this;
        this.pivotColumns = [];
        // pull out the columns
        this.originalColumns.forEach(function (column) {
            if (typeof column.getColDef().pivotIndex === 'number') {
                _this.pivotColumns.push(column);
            }
        });
        // then sort them
        this.pivotColumns.sort(function (colA, colB) {
            return colA.getColDef().pivotIndex - colB.getColDef().pivotIndex;
        });
    };
    // called by headerRenderer - when a header is opened or closed
    ColumnController.prototype.setColumnGroupOpened = function (passedGroup, newValue, instanceId) {
        var groupToUse = this.getColumnGroup(passedGroup, instanceId);
        if (!groupToUse) {
            return;
        }
        this.logger.log('columnGroupOpened(' + groupToUse.getGroupId() + ',' + newValue + ')');
        groupToUse.setExpanded(newValue);
        this.gridPanel.turnOnAnimationForABit();
        this.updateGroupsAndDisplayedColumns();
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_GROUP_OPENED).withColumnGroup(groupToUse);
        this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_GROUP_OPENED, event);
    };
    // used by updateModel
    ColumnController.prototype.getColumnGroupState = function () {
        var groupState = {};
        this.columnUtils.deptFirstDisplayedColumnTreeSearch(this.getAllDisplayedColumnGroups(), function (child) {
            if (child instanceof columnGroup_1.ColumnGroup) {
                var columnGroup = child;
                var key = columnGroup.getGroupId();
                // if more than one instance of the group, we only record the state of the first item
                if (!groupState.hasOwnProperty(key)) {
                    groupState[key] = columnGroup.isExpanded();
                }
            }
        });
        return groupState;
    };
    // used by updateModel
    ColumnController.prototype.setColumnGroupState = function (groupState) {
        this.columnUtils.deptFirstDisplayedColumnTreeSearch(this.getAllDisplayedColumnGroups(), function (child) {
            if (child instanceof columnGroup_1.ColumnGroup) {
                var columnGroup = child;
                var key = columnGroup.getGroupId();
                var shouldExpandGroup = groupState[key] === true && columnGroup.isExpandable();
                if (shouldExpandGroup) {
                    columnGroup.setExpanded(true);
                }
            }
        });
    };
    ColumnController.prototype.updateModel = function () {
        // save opened / closed state
        var oldGroupState = this.getColumnGroupState();
        this.createGroupAutoColumn();
        var visibleColumns = utils_1.Utils.filter(this.gridColumns, function (column) { return column.isVisible(); });
        if (this.groupAutoColumnActive) {
            visibleColumns.unshift(this.groupAutoColumn);
        }
        this.buildAllGroups(visibleColumns);
        // restore opened / closed state
        this.setColumnGroupState(oldGroupState);
        // this is also called when a group is opened or closed
        this.updateGroupsAndDisplayedColumns();
        this.setFirstRightAndLastLeftPinned();
    };
    ColumnController.prototype.onPivotValueChanged = function () {
        // if we are pivoting, then we need to re-work the pivot columns
        this.setupGridColumns();
        this.updateModel();
        // this.eventService.dispatchEvent(Events.EVENT_PIVOT_VALUE_CHANGED);
        var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_PIVOT_VALUE_CHANGED);
        this.eventService.dispatchEvent(events_1.Events.EVENT_PIVOT_VALUE_CHANGED, event);
    };
    ColumnController.prototype.setupGridColumns = function () {
        var doingPivot = this.pivotColumns.length > 0;
        if (doingPivot) {
            var pivotColumnGroupDefs = this.pivotService.getPivotColumnGroupDefs();
            var balancedTreeResult = this.balancedColumnTreeBuilder.createBalancedColumnGroups(pivotColumnGroupDefs);
            this.gridBalancedTree = balancedTreeResult.balancedTree;
            this.gridHeaderRowCount = balancedTreeResult.treeDept + 1;
            this.gridColumns = this.getColumnsFromTree(this.gridBalancedTree);
        }
        else {
            this.gridBalancedTree = this.originalBalancedTree;
            this.gridHeaderRowCount = this.originalHeaderRowCount;
            this.gridColumns = this.originalColumns;
        }
    };
    ColumnController.prototype.updateGroupsAndDisplayedColumns = function () {
        this.updateGroups();
        this.updateDisplayedColumnsFromGroups();
    };
    ColumnController.prototype.updateDisplayedColumnsFromGroups = function () {
        this.addToDisplayedColumns(this.displayedLeftColumnTree, this.displayedLeftColumns);
        this.addToDisplayedColumns(this.displayedRightColumnTree, this.displayedRightColumns);
        this.addToDisplayedColumns(this.displayedCentreColumnTree, this.displayedCenterColumns);
        this.setLeftValues();
    };
    // sets the left pixel position of each column
    ColumnController.prototype.setLeftValues = function () {
        // go through each list of displayed columns
        var allColumns = this.originalColumns.slice(0);
        [this.displayedLeftColumns, this.displayedRightColumns, this.displayedCenterColumns].forEach(function (columns) {
            var left = 0;
            columns.forEach(function (column) {
                column.setLeft(left);
                left += column.getActualWidth();
                utils_1.Utils.removeFromArray(allColumns, column);
            });
        });
        // items left in allColumns are columns not displayed, so remove the left position. this is
        // important for the rows, as if a col is made visible, then taken out, then made visible again,
        // we don't want the animation of the cell floating in from the old position, whatever that was.
        allColumns.forEach(function (column) {
            column.setLeft(null);
        });
    };
    ColumnController.prototype.addToDisplayedColumns = function (displayedColumnTree, displayedColumns) {
        displayedColumns.length = 0;
        this.columnUtils.deptFirstDisplayedColumnTreeSearch(displayedColumnTree, function (child) {
            if (child instanceof column_1.Column) {
                displayedColumns.push(child);
            }
        });
    };
    // called from api
    ColumnController.prototype.sizeColumnsToFit = function (gridWidth) {
        var _this = this;
        // avoid divide by zero
        var allDisplayedColumns = this.getAllDisplayedColumns();
        if (gridWidth <= 0 || allDisplayedColumns.length === 0) {
            return;
        }
        var colsToNotSpread = utils_1.Utils.filter(allDisplayedColumns, function (column) {
            return column.getColDef().suppressSizeToFit === true;
        });
        var colsToSpread = utils_1.Utils.filter(allDisplayedColumns, function (column) {
            return column.getColDef().suppressSizeToFit !== true;
        });
        // make a copy of the cols that are going to be resized
        var colsToFireEventFor = colsToSpread.slice(0);
        var finishedResizing = false;
        while (!finishedResizing) {
            finishedResizing = true;
            var availablePixels = gridWidth - getTotalWidth(colsToNotSpread);
            if (availablePixels <= 0) {
                // no width, set everything to minimum
                colsToSpread.forEach(function (column) {
                    column.setMinimum();
                });
            }
            else {
                var scale = availablePixels / getTotalWidth(colsToSpread);
                // we set the pixels for the last col based on what's left, as otherwise
                // we could be a pixel or two short or extra because of rounding errors.
                var pixelsForLastCol = availablePixels;
                // backwards through loop, as we are removing items as we go
                for (var i = colsToSpread.length - 1; i >= 0; i--) {
                    var column = colsToSpread[i];
                    var newWidth = Math.round(column.getActualWidth() * scale);
                    if (newWidth < column.getMinWidth()) {
                        column.setMinimum();
                        moveToNotSpread(column);
                        finishedResizing = false;
                    }
                    else if (column.isGreaterThanMax(newWidth)) {
                        column.setActualWidth(column.getMaxWidth());
                        moveToNotSpread(column);
                        finishedResizing = false;
                    }
                    else {
                        var onLastCol = i === 0;
                        if (onLastCol) {
                            column.setActualWidth(pixelsForLastCol);
                        }
                        else {
                            pixelsForLastCol -= newWidth;
                            column.setActualWidth(newWidth);
                        }
                    }
                }
            }
        }
        this.setLeftValues();
        // widths set, refresh the gui
        colsToFireEventFor.forEach(function (column) {
            var event = new columnChangeEvent_1.ColumnChangeEvent(events_1.Events.EVENT_COLUMN_RESIZED).withColumn(column);
            _this.eventService.dispatchEvent(events_1.Events.EVENT_COLUMN_RESIZED, event);
        });
        function moveToNotSpread(column) {
            utils_1.Utils.removeFromArray(colsToSpread, column);
            colsToNotSpread.push(column);
        }
        function getTotalWidth(columns) {
            var result = 0;
            for (var i = 0; i < columns.length; i++) {
                result += columns[i].getActualWidth();
            }
            return result;
        }
    };
    ColumnController.prototype.buildAllGroups = function (visibleColumns) {
        var leftVisibleColumns = utils_1.Utils.filter(visibleColumns, function (column) {
            return column.getPinned() === 'left';
        });
        var rightVisibleColumns = utils_1.Utils.filter(visibleColumns, function (column) {
            return column.getPinned() === 'right';
        });
        var centerVisibleColumns = utils_1.Utils.filter(visibleColumns, function (column) {
            return column.getPinned() !== 'left' && column.getPinned() !== 'right';
        });
        var groupInstanceIdCreator = new groupInstanceIdCreator_1.GroupInstanceIdCreator();
        this.displayedLeftColumnTree = this.displayedGroupCreator.createDisplayedGroups(leftVisibleColumns, this.gridBalancedTree, groupInstanceIdCreator);
        this.displayedRightColumnTree = this.displayedGroupCreator.createDisplayedGroups(rightVisibleColumns, this.gridBalancedTree, groupInstanceIdCreator);
        this.displayedCentreColumnTree = this.displayedGroupCreator.createDisplayedGroups(centerVisibleColumns, this.gridBalancedTree, groupInstanceIdCreator);
    };
    ColumnController.prototype.updateGroups = function () {
        var allGroups = this.getAllDisplayedColumnGroups();
        this.columnUtils.deptFirstAllColumnTreeSearch(allGroups, function (child) {
            if (child instanceof columnGroup_1.ColumnGroup) {
                var group = child;
                group.calculateDisplayedColumns();
            }
        });
    };
    ColumnController.prototype.createGroupAutoColumn = function () {
        // see if we need to insert the default grouping column
        var needAGroupColumn = this.rowGroupColumns.length > 0
            && !this.gridOptionsWrapper.isGroupSuppressAutoColumn()
            && !this.gridOptionsWrapper.isGroupUseEntireRow()
            && !this.gridOptionsWrapper.isGroupSuppressRow();
        this.groupAutoColumnActive = needAGroupColumn;
        // lazy create group auto-column
        if (needAGroupColumn && !this.groupAutoColumn) {
            // if one provided by user, use it, otherwise create one
            var autoColDef = this.gridOptionsWrapper.getGroupColumnDef();
            if (!autoColDef) {
                var localeTextFunc = this.gridOptionsWrapper.getLocaleTextFunc();
                autoColDef = {
                    headerName: localeTextFunc('group', 'Group'),
                    comparator: functions_1.defaultGroupComparator,
                    valueGetter: function (params) {
                        if (params.node.group) {
                            return params.node.key;
                        }
                        else if (params.data && params.colDef.field) {
                            return params.data[params.colDef.field];
                        }
                        else {
                            return null;
                        }
                    },
                    suppressAggregation: true,
                    suppressRowGroup: true,
                    cellRenderer: 'group'
                };
            }
            // we never allow moving the group column
            autoColDef.suppressMovable = true;
            var colId = 'ag-Grid-AutoColumn';
            this.groupAutoColumn = new column_1.Column(autoColDef, colId);
            this.context.wireBean(this.groupAutoColumn);
        }
    };
    ColumnController.prototype.createValueColumns = function () {
        this.valueColumns = [];
        // override with columns that have the aggFunc specified explicitly
        for (var i = 0; i < this.originalColumns.length; i++) {
            var column = this.originalColumns[i];
            if (column.getColDef().aggFunc) {
                column.setAggFunc(column.getColDef().aggFunc);
                this.valueColumns.push(column);
            }
        }
    };
    ColumnController.prototype.getWithOfColsInList = function (columnList) {
        var result = 0;
        for (var i = 0; i < columnList.length; i++) {
            result += columnList[i].getActualWidth();
        }
        return result;
    };
    __decorate([
        context_1.Autowired('gridOptionsWrapper'), 
        __metadata('design:type', gridOptionsWrapper_1.GridOptionsWrapper)
    ], ColumnController.prototype, "gridOptionsWrapper", void 0);
    __decorate([
        context_1.Autowired('expressionService'), 
        __metadata('design:type', expressionService_1.ExpressionService)
    ], ColumnController.prototype, "expressionService", void 0);
    __decorate([
        context_1.Autowired('balancedColumnTreeBuilder'), 
        __metadata('design:type', balancedColumnTreeBuilder_1.BalancedColumnTreeBuilder)
    ], ColumnController.prototype, "balancedColumnTreeBuilder", void 0);
    __decorate([
        context_1.Autowired('displayedGroupCreator'), 
        __metadata('design:type', displayedGroupCreator_1.DisplayedGroupCreator)
    ], ColumnController.prototype, "displayedGroupCreator", void 0);
    __decorate([
        context_1.Autowired('autoWidthCalculator'), 
        __metadata('design:type', autoWidthCalculator_1.AutoWidthCalculator)
    ], ColumnController.prototype, "autoWidthCalculator", void 0);
    __decorate([
        context_1.Autowired('eventService'), 
        __metadata('design:type', eventService_1.EventService)
    ], ColumnController.prototype, "eventService", void 0);
    __decorate([
        context_1.Autowired('columnUtils'), 
        __metadata('design:type', columnUtils_1.ColumnUtils)
    ], ColumnController.prototype, "columnUtils", void 0);
    __decorate([
        context_1.Autowired('gridPanel'), 
        __metadata('design:type', gridPanel_1.GridPanel)
    ], ColumnController.prototype, "gridPanel", void 0);
    __decorate([
        context_1.Autowired('context'), 
        __metadata('design:type', context_1.Context)
    ], ColumnController.prototype, "context", void 0);
    __decorate([
        context_1.Autowired('pivotService'), 
        __metadata('design:type', pivotService_1.PivotService)
    ], ColumnController.prototype, "pivotService", void 0);
    __decorate([
        context_1.PostConstruct, 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], ColumnController.prototype, "init", null);
    __decorate([
        __param(0, context_1.Qualifier('loggerFactory')), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [logger_1.LoggerFactory]), 
        __metadata('design:returntype', void 0)
    ], ColumnController.prototype, "setBeans", null);
    ColumnController = __decorate([
        context_1.Bean('columnController'), 
        __metadata('design:paramtypes', [])
    ], ColumnController);
    return ColumnController;
})();
exports.ColumnController = ColumnController;
