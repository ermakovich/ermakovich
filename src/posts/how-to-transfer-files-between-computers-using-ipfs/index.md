---
date: '2018-10-04'
title: 'How to transfer files between computers using IPFS'
image: './ipfs.png'
tweetId: '1358802948696997891'
---

When it comes to transferring files between computers usually there are many options. One relatively new and modern option is to use [IPFS](https://ipfs.io). There are numerous benefits:

- It's cross-platform and works on top of different low-level protocols, providing best compatibility and performance.
- It's a P2P (peer-to-peer) technology, meaning that files will be transferred directly from one computer to another. If two computers are in the same network, then your files will be copied via this network without hitting any internet servers.
- It's open source.
- It's relatively new and very interesting technology. Once you learn how to use it for basic scenarios you will have better understanding of how it works, and will be able to use in more complex ways.

I hope you are now convinced enough that IPFS is a good choice. Let's move to actual files transferring.

## Preparing both machines

First of all we need to [install IPFS](https://docs.ipfs.io/install) on both machines. After installing we need to init repositories:

```
$ ipfs init
```

Now we need to start IPFS daemon processes, so that machines can discover each other and communicate:

```
$ ipfs daemon
```

## Source machine

On the source machine where files are located let's start with adding files to the repo:

```
$ ipfs add <filename>
```

If we are adding single file, it will give us it's hash (long string starting with `Qm`). This should look something like this:

```
added QmUVTKsrYJpaxUT7dr9FpKq6AoKHhEM7eG1ZHGL56haKLG <filename>
```

If we want to add a directory rather than single file, then we need to use `-r` flag when adding:

```
$ ipfs add -r <path>
```

This will give us hashes for each individual file and each directory. At the end of the list we will find hash for the root directory that we added:

```
added QmUVTKsrYJpaxUT7dr9FpKq6AoKHhEM7eG1ZHGL56haKLG <path>/<filename>
added QmaW4tz1ZMT8Q3feTaskg7bWhMq6DLxoQWN2fckDrcUKmx <path>
```

Notice hash of the root directory on the last line in our case. We will be using this hash in further commands.
Now we need to pin objects to local storage. This is needed in order to make them discoverable by other IPFS nodes. We can pin individual file or entire directory by passing it's hash. Let's pin our directory:

```
$ ipfs pin add QmaW4tz1ZMT8Q3feTaskg7bWhMq6DLxoQWN2fckDrcUKmx
```

## Target machine

Now our directory is discoverable using it's unique hash via IPFS. All we need to do is to copy hash to the second machine and then run get command on it:

```
$ ipfs get QmaW4tz1ZMT8Q3feTaskg7bWhMq6DLxoQWN2fckDrcUKmx -o <output_path>
```

Directory and it's contents will be transferred to the specified output directory. That's it!

**Note:** this command may feel unresponsive if you run it right after adding files, since it takes some time for IPFS to sync up and make files actually discoverable. In my case it didn't show any signs of activity for few minutes, but then it eventually worked.

## Optional: cleaning up

Once we transferred files, assuming that we don't need to transfer them any more, we should remove them from source computer:

```
$ ipfs pin rm QmaW4tz1ZMT8Q3feTaskg7bWhMq6DLxoQWN2fckDrcUKmx
$ ipfs repo gc
```

On target machine, since we didn't pin anything, we can simply run:

```
$ ipfs repo gc
```

## Disclaimer

This post shows how to transfer files using IPFS. We are assuming that files are not containing any sensitive information. Actually due to the way how IPFS works it's very unlikely that somebody will pick up your files while you are transferring them and before you remove them. But if you need to transfer your very own collection of homemade porno for example, please consider using [private networks](https://github.com/ipfs/go-ipfs/blob/master/docs/experimental-features.md#private-networks) feature in IPFS or some kind of encryption applied to files before transferring :)
