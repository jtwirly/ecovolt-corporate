/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@zenstackhq/runtime/models';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.EnergyConsumptionInputSchema.createMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyConsumption.createMany(input as any))),

        create: procedure.input($Schema.EnergyConsumptionInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyConsumption.create(input as any))),

        deleteMany: procedure.input($Schema.EnergyConsumptionInputSchema.deleteMany.optional()).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyConsumption.deleteMany(input as any))),

        delete: procedure.input($Schema.EnergyConsumptionInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyConsumption.delete(input as any))),

        findFirst: procedure.input($Schema.EnergyConsumptionInputSchema.findFirst.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyConsumption.findFirst(input as any))),

        findMany: procedure.input($Schema.EnergyConsumptionInputSchema.findMany.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyConsumption.findMany(input as any))),

        findUnique: procedure.input($Schema.EnergyConsumptionInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).energyConsumption.findUnique(input as any))),

        updateMany: procedure.input($Schema.EnergyConsumptionInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyConsumption.updateMany(input as any))),

        update: procedure.input($Schema.EnergyConsumptionInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).energyConsumption.update(input as any))),

        count: procedure.input($Schema.EnergyConsumptionInputSchema.count.optional()).query(({ ctx, input }) => checkRead(db(ctx).energyConsumption.count(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.EnergyConsumptionCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyConsumptionCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyConsumptionCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyConsumptionCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.EnergyConsumptionCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyConsumptionCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyConsumptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyConsumptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyConsumptionCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyConsumptionCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyConsumptionGetPayload<T>, Context>) => Promise<Prisma.EnergyConsumptionGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.EnergyConsumptionDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyConsumptionDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyConsumptionDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyConsumptionDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.EnergyConsumptionDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyConsumptionDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyConsumptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyConsumptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyConsumptionDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyConsumptionDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyConsumptionGetPayload<T>, Context>) => Promise<Prisma.EnergyConsumptionGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.EnergyConsumptionFindFirstArgs, TData = Prisma.EnergyConsumptionGetPayload<T>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyConsumptionFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyConsumptionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyConsumptionFindFirstArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyConsumptionFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyConsumptionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyConsumptionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.EnergyConsumptionFindManyArgs, TData = Array<Prisma.EnergyConsumptionGetPayload<T>>>(
            input?: Prisma.SelectSubset<T, Prisma.EnergyConsumptionFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.EnergyConsumptionGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyConsumptionFindManyArgs>(
            input?: Omit<Prisma.SelectSubset<T, Prisma.EnergyConsumptionFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.EnergyConsumptionGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.EnergyConsumptionGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.EnergyConsumptionFindUniqueArgs, TData = Prisma.EnergyConsumptionGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.EnergyConsumptionFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.EnergyConsumptionGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.EnergyConsumptionFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.EnergyConsumptionFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.EnergyConsumptionGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.EnergyConsumptionGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.EnergyConsumptionUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyConsumptionUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyConsumptionUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyConsumptionUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.EnergyConsumptionUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.EnergyConsumptionUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.EnergyConsumptionGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.EnergyConsumptionGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.EnergyConsumptionUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.EnergyConsumptionUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.EnergyConsumptionGetPayload<T>, Context>) => Promise<Prisma.EnergyConsumptionGetPayload<T>>
            };

    };
    count: {

        useQuery: <T extends Prisma.EnergyConsumptionCountArgs, TData = 'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyConsumptionCountAggregateOutputType>
            : number>(
                input?: Prisma.Subset<T, Prisma.EnergyConsumptionCountArgs>,
                opts?: UseTRPCQueryOptions<string, T, 'select' extends keyof T
                    ? T['select'] extends true
                    ? number
                    : Prisma.GetScalarType<T['select'], Prisma.EnergyConsumptionCountAggregateOutputType>
                    : number, TData, Error>
            ) => UseTRPCQueryResult<
                TData,
                TRPCClientErrorLike<AppRouter>
            >;
        useInfiniteQuery: <T extends Prisma.EnergyConsumptionCountArgs>(
            input?: Omit<Prisma.Subset<T, Prisma.EnergyConsumptionCountArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, 'select' extends keyof T
                ? T['select'] extends true
                ? number
                : Prisma.GetScalarType<T['select'], Prisma.EnergyConsumptionCountAggregateOutputType>
                : number, Error>
        ) => UseTRPCInfiniteQueryResult<
            'select' extends keyof T
            ? T['select'] extends true
            ? number
            : Prisma.GetScalarType<T['select'], Prisma.EnergyConsumptionCountAggregateOutputType>
            : number,
            TRPCClientErrorLike<AppRouter>
        >;

    };
}
