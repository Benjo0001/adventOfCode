with open("inputs/input-6.txt") as f:
    groups = f.read().split('\n\n')

counter = 0
sets = []
for group in groups:
    union_set = reduce(set.union, map(set, group.split()))
    counter += len(union_set)
print(len(groups))
print(counter)
