# How to Contribute 如何参与

This repository collects smart space **solutions** for elder care, child-friendly environments, and animal welfare. There are two ways to participate.

这个仓库收录面向养老、儿童友好、动物福利场景的智能空间**解决方案**。参与方式有两条路径。

## Path 1: Propose a Solution 提案新方案

You have an idea, or something you're already building, and want it included here:

你有一个想法或已经在做的方案，想收录进来：

1. Open an issue using the **Propose a Solution** template / 用「提案新方案」Issue 模板发起
2. Discuss and refine it in Discussions / 在 Discussions 里跟大家讨论、打磨
3. Once it's ready, submit a PR adding it as `docs/<area>/<solution-name>.md` — merging it is what gets it included / 方案成熟后，提 PR 把它写成一篇文档放进 `docs/<area>/<方案名>.md`，合并后即收录

## Path 2: Claim a Need 认领需求

Maintainers publish needs — solutions nobody has built yet:

维护者会发布还没人做的需求（任务清单）：

1. Filter issues by `type:need` + `status:open` / 在 Issues 里筛选 `type:need` + `status:open` 的条目
2. Comment to claim it; a maintainer will assign it to you and set `status:in-progress` / 评论认领，维护者会把 Issue 指派给你（`status` 改成 `in-progress`）
3. Submit a PR linked to the issue; once merged, `status` becomes `done` / 做完后提 PR 关联对应 Issue，合并后 `status` 改成 `done`

What if a claim goes stale? For now this is handled by manual triage — maintainers will follow up; there's no automatic release yet.

认领后长期没进展怎么办？目前靠人工 triage，维护者会主动跟进，暂不做自动释放。

## Labels

- `type:proposal` / `type:need` — community proposal vs. maintainer-published need / 区分是社区提案还是官方需求
- `area:elder-care` / `area:child-friendly` / `area:animal-welfare` — which domain / 所属领域
- `status:open` / `status:in-progress` / `status:done` — progress, shared across both paths / 进度，两条路径共用同一套状态

## Other 其他

- Idea not fully formed yet? Start a Discussion instead of opening an issue / 有想法但还不成形？先去 Discussions 聊，不用急着开 Issue
- Not sure which area fits? Say so in your proposal — a maintainer will help sort it out / 找不到合适的领域分类？在提案里说明，维护者会帮忙判断
