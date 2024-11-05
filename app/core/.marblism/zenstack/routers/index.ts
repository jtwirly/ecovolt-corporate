/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@zenstackhq/runtime/models";
import createUserRouter from "./User.router";
import createFacilityRouter from "./Facility.router";
import createEnergyConsumptionRouter from "./EnergyConsumption.router";
import createEnergyCostRouter from "./EnergyCost.router";
import createSustainabilityGoalRouter from "./SustainabilityGoal.router";
import createEnergyProcurementRouter from "./EnergyProcurement.router";
import createAlertRouter from "./Alert.router";
import createReportRouter from "./Report.router";
import createOrganizationRouter from "./Organization.router";
import createOrganizationRoleRouter from "./OrganizationRole.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as FacilityClientType } from "./Facility.router";
import { ClientType as EnergyConsumptionClientType } from "./EnergyConsumption.router";
import { ClientType as EnergyCostClientType } from "./EnergyCost.router";
import { ClientType as SustainabilityGoalClientType } from "./SustainabilityGoal.router";
import { ClientType as EnergyProcurementClientType } from "./EnergyProcurement.router";
import { ClientType as AlertClientType } from "./Alert.router";
import { ClientType as ReportClientType } from "./Report.router";
import { ClientType as OrganizationClientType } from "./Organization.router";
import { ClientType as OrganizationRoleClientType } from "./OrganizationRole.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        user: createUserRouter(router, procedure),
        facility: createFacilityRouter(router, procedure),
        energyConsumption: createEnergyConsumptionRouter(router, procedure),
        energyCost: createEnergyCostRouter(router, procedure),
        sustainabilityGoal: createSustainabilityGoalRouter(router, procedure),
        energyProcurement: createEnergyProcurementRouter(router, procedure),
        alert: createAlertRouter(router, procedure),
        report: createReportRouter(router, procedure),
        organization: createOrganizationRouter(router, procedure),
        organizationRole: createOrganizationRoleRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    user: UserClientType<AppRouter>;
    facility: FacilityClientType<AppRouter>;
    energyConsumption: EnergyConsumptionClientType<AppRouter>;
    energyCost: EnergyCostClientType<AppRouter>;
    sustainabilityGoal: SustainabilityGoalClientType<AppRouter>;
    energyProcurement: EnergyProcurementClientType<AppRouter>;
    alert: AlertClientType<AppRouter>;
    report: ReportClientType<AppRouter>;
    organization: OrganizationClientType<AppRouter>;
    organizationRole: OrganizationRoleClientType<AppRouter>;
}
