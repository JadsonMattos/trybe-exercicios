def longer_no_repeating_substring_len(string):
    sub_start = 0
    size_sub = 0
    start_index = 0
    position = {}

    for i in range(0, len(string)):
        if string[i] not in position:
            position[string[i]] = i

        else:
            if position[string[i]] >= sub_start:
                currlen = i - sub_start
                if size_sub < currlen:
                    size_sub = currlen
                    start_index = sub_start
                sub_start = position[string[i]] + 1
            position[string[i]] = i
    if size_sub < i - sub_start:
        size_sub = i - sub_start
        start_index = sub_start
    return string[start_index:(start_index + size_sub)]
