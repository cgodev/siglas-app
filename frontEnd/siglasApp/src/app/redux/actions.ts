import { Action } from '@ngrx/store';

export enum AccionesSiglas {
    EMPTY = '[SIGLAS] => EMPTY',
    GET = '[SIGLAS] => GET',
    SET = '[SIGLAS] => SET',
    ERROR = '[SIGLAS] => SET ERROR',
    LOADING = '[SIGLAS] => SET LOADING',
    SET_HISTORY = '[SIGLAS] => SET HISTORY',
    SET_USER = '[SIGLAS (USUARIO)] => SET USUARIO',
    SET_CURRENT_DATA = '[SIGLAS] => SET CURRENT DATA'
}

export class Empty implements Action {
    readonly type = AccionesSiglas.EMPTY;
}

export class GetSiglas implements Action {
    readonly type = AccionesSiglas.GET;
}

export class SetSiglas implements Action {
    readonly type = AccionesSiglas.SET;
    constructor(public payload: any) { }
}

export class SetError implements Action {
    readonly type = AccionesSiglas.ERROR;
    constructor(public payload: any) { }
}

export class SetLoading implements Action {
    readonly type = AccionesSiglas.LOADING;
    constructor(public payload: any) { }
}

export class SetHistory implements Action {
    readonly type = AccionesSiglas.SET_HISTORY;
    constructor(public payload: any) { }
}

export class SetUser implements Action {
    readonly type = AccionesSiglas.SET_USER;
    constructor(public payload: any) { }
}

export class SetCurrentData implements Action {
    readonly type = AccionesSiglas.SET_CURRENT_DATA;
    constructor(public payload: any) { }
}

export type UnionAccionesSiglas =
    | Empty
    | SetError
    | SetHistory
    | SetUser
    | SetLoading
    | SetSiglas
    | SetLoading
    | SetCurrentData
